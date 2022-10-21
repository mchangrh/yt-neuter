## aggressive filters not recommended for daily use
```adguard
## homepage
! remove all live videos
youtube.com##ytd-rich-item-renderer:has(.badge-style-type-live-now-alternate)
youtube.com##ytd-compact-video-renderer:has(.badge-style-type-live-now-alternate)
! hide all shorts in subscriptions tab
youtube.com##ytd-grid-video-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style=SHORTS])
! hide shorts shelves
youtube.com##.ytd-item-section-renderer:has(ytd-reel-shelf-renderer)
```

## block youtube video tracking endpoints
These will break your history and recommendations but allows for spiteful watching of content
```adguard
! playback ping
||www.youtube.com/api/stats/playback
! watch % and time
||www.youtube.com/api/stats/watchtime
! periodic stat pings
||www.youtube.com/youtubei/v1/log_event
! ? generic stats ping
||www.youtube.com/generate_204
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