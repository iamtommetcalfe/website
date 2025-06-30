# Image Optimization Implementation

This document explains the image optimization techniques implemented in the website project.

## Overview

To improve performance and user experience, several image optimization techniques have been implemented:

1. **Conversion of Large GIFs to Video Formats**
2. **Lazy Loading for Non-Critical Images**
3. **Responsive Image Implementation**
4. **Optimization of Unused Assets**

## Implementation Details

### Conversion of GIFs to Video Formats

Large GIF files were converted to more efficient video formats:

- The "hello-friend.gif" (3.5MB) in the MrRobotPopUp component was converted to:
  - MP4 format for broad browser support
  - WebM format for better compression in supporting browsers
  - Original GIF retained as a fallback

The implementation uses the HTML5 video element with multiple sources:

```html
<video autoplay loop muted playsinline class="popup-image">
  <source :src="helloFriendWebM" type="video/webm" />
  <source :src="helloFriendMP4" type="video/mp4" />
  <img :src="helloFriendGif" alt="Hello Friend - Mr. Robot" class="popup-image" />
</video>
```

This approach provides:

- Significantly reduced file sizes (typically 60-80% smaller)
- Maintained visual quality
- Backward compatibility with browsers that don't support HTML5 video

### Lazy Loading for Non-Critical Images

The `loading="lazy"` attribute was added to non-critical images:

- Profile image in the Homepage component
- Social media icons in the Footer component

Example implementation:

```html
<img
  :src="imageUrlJPEG"
  width="248"
  height="248"
  loading="lazy"
  alt="Tom Stirrop-Metcalfe | Software Engineering Manager | Birmingham, United Kingdom"
/>
```

This tells the browser to defer loading these images until they're about to enter the viewport, improving initial page load time.

### Responsive Image Implementation

The project already had a good implementation of responsive images using the picture element with source sets:

```html
<picture class="tom-metcalfe-image">
  <source :srcset="imageUrlWEBP" type="image/webp" />
  <source :srcset="imageUrlJPEG" type="image/jpeg" />
  <img :src="imageUrlJPEG" ... />
</picture>
```

This approach:

- Serves WebP images to browsers that support them
- Falls back to JPEG/PNG for browsers that don't support WebP
- Ensures the best balance of quality and file size

### Optimization of Unused Assets

Some large image assets that weren't actively used in the project were optimized for potential future use:

- The "internal-server-error.gif" (1MB) was converted to MP4 and WebM formats

## Benefits

These optimizations provide several benefits:

1. **Reduced Page Load Time**: Smaller file sizes and deferred loading improve initial page load time
2. **Lower Bandwidth Usage**: More efficient formats reduce the amount of data transferred
3. **Better User Experience**: Faster loading and smoother animations improve the overall user experience
4. **Improved SEO**: Page speed is a ranking factor for search engines

## Future Improvements

Potential future image optimization improvements could include:

1. **Implementing srcset and sizes attributes** for serving different image sizes based on viewport dimensions
2. **Further compression of existing images** using tools like ImageOptim or TinyPNG
3. **Adding preload hints** for critical above-the-fold images
4. **Implementing AVIF format support** for even better compression in supporting browsers
