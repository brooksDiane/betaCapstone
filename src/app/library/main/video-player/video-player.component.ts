import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: 'video-player.component.html',
  styleUrls: ['video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  max = 100;
  min = 0;
  step = 1;
  value = 2;

  constructor(
    private cd: ChangeDetectorRef,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'forward',
      sanitizer.bypassSecurityTrustResourceUrl(
        './../../../assets/icons/forward.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'replay',
      sanitizer.bypassSecurityTrustResourceUrl(
        './../../../assets/icons/replay.svg'
      )
    );
  }

  video!: HTMLVideoElement;
  videoContainer!: HTMLElement;
  controls!: HTMLDivElement;
  videoStateIcon = 'play_arrow';
  volumeIcon = 'volume_up';
  videoDuration: number = 0;

  @Input() source!: string;
  @Input() mediatype!: string;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.video = document.querySelector('video')!;
    this.videoDuration = this.video.duration;
    this.cd.detectChanges(); //to avoid error
    this.controls = document.querySelector('.controls')!;
    this.videoContainer = document.querySelector('.video-container')!;
    this.video.controls = false; // fallback for js blocked browsers I guess
  }

  speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
  mode: ProgressBarMode = 'determinate';
  progressValue = 0;

  switchState() {
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.videoStateIcon = 'pause';
    } else {
      this.video.pause();
      this.videoStateIcon = 'play_arrow';
    }
  }

  endVideo() {
    // just updates the ui
    this.videoStateIcon = 'play_arrow';
  }

  mute() {
    if (this.video.muted) {
      this.video.muted = false;
      this.volumeIcon = 'volume_up';
    } else {
      this.video.muted = true;
      this.volumeIcon = 'volume_off';
    }
  }

  updateProgress() {
    this.progressValue = (this.video.currentTime / this.video.duration) * 100;
    // I mean, gross for short videos, but the fuck does not let me set max, so what can I do.
    //also can't expect precise navigation
  }

  forward() {
    this.video.currentTime += 10;
  }

  replay() {
    this.video.currentTime -= 10;
  }

  changePlaybackSpeed(v: number) {
    this.video.playbackRate = v;
  }

  fullscreen() {
    if (document.fullscreenElement !== null) {
      // The document is in fullscreen mode
      document.exitFullscreen();
      this.setFullscreenData(false);
    } else {
      // The document is not in fullscreen mode
      this.videoContainer.requestFullscreen();
      this.setFullscreenData(true);
    }
  }

  onchange() {
    console.log(this.value);
  }

  setFullscreenData(state: boolean) {
    this.videoContainer.setAttribute('data-fullscreen', String(state));
  }

  showControls() {
    this.controls.style.display = 'block';
  }

  hideControls() {
    this.controls.style.display = 'none';
  }

  speed: 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 = 1;
}
