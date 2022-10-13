## aggressive filters not recommended for daily use
```adguard
## homepage
! remove all live videos
youtube.com##ytd-rich-item-renderer:has(.badge-style-type-live-now-alternate)
! hide all shorts in subscriptions tab
youtube.com##ytd-grid-video-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style=SHORTS])
```

## misc related filters
```adguard
## block casting
||www.gstatic.com/*/cast_sender.js
```

## remove background for youtube buttons
```adguard
## remove background for youtube buttons
## excludes subscribe button
youtube.com##button.yt-spec-button-shape-next--tonal:style(background-color: transparent !important)
```