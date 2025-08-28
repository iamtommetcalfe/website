import fs from 'fs';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai';

const { GITHUB_REPOSITORY, GITHUB_EVENT_PATH, GITHUB_TOKEN, OPENAI_API_KEY } = process.env;

const [owner, repo] = GITHUB_REPOSITORY.split('/');

// Load the event JSON
const event = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, 'utf8'));
const prNumber = event.pull_request.number;

const octokit = new Octokit({ auth: GITHUB_TOKEN });
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// Get PR files
const files = await octokit.paginate(octokit.pulls.listFiles, {
  owner,
  repo,
  pull_number: prNumber,
  per_page: 100,
});

// Build diff payload
const maxChars = 120000;
let used = 0;
const snippets = [];
for (const f of files) {
  if (!f.patch) continue;
  const chunk = `\n---\nFile: ${f.filename}\n${f.patch}`;
  if (used + chunk.length > maxChars) break;
  snippets.push(chunk);
  used += chunk.length;
}

const systemPrompt = `
You are a senior reviewer. Provide concise, actionable feedback.
Focus on:
- correctness, security, performance, readability, tests
- language and framework best practices
Output:
- summary paragraph
- bullet list of issues
`;

const userPrompt = `
Pull request #${prNumber}
Changed files and patches:${snippets.join('\n')}
`;

const resp = await openai.chat.completions.create({
  model: 'gpt-4.1-mini',
  temperature: 0.2,
  messages: [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ],
});

const body = resp.choices[0].message.content?.trim() || 'No issues found.';

// Post a single comment on the PR
await octokit.issues.createComment({
  owner,
  repo,
  issue_number: prNumber,
  body,
});

console.info('✅ Posted AI review comment');
