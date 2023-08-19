function splitVideoIntoSentences(videoElement, sentences) {
  // 获取视频元素的持续时间
  const videoDuration = videoElement.duration;
  let currentTime = 0;
  let repeatCount = 1;

  while (currentTime < videoDuration) {
    // 获取每一个句子的持续时间
    const sentence = sentences[Math.floor(currentTime / videoDuration * sentences.length)];
    // 每一个句子的持续时间加上当前句子的持续时间
    currentTime += sentence.duration * repeatCount;
    repeatCount = 1;

    // 如果当前句子的持续时间大于视频元素的持续时间，则停止视频
    if (currentTime > videoDuration) {
      break;
    }

    // 暂停视频元素
    videoElement.pause();
    // 设置视频元素的当前时间
    videoElement.currentTime = currentTime;
    // 延迟一秒后播放视频元素
    setTimeout(() => {
      videoElement.play();
    }, 1000);

    // 延迟持续指定的时间后重复播放视频元素
    setTimeout(() => {
      repeatCount++;
    }, sentence.duration * 1000);
  }
}

// 获取视频元素
const videoElements = document.getElementsByTagName('video');
// 如果视频元素存在，则分割视频
if (videoElements.length > 0) {
  splitVideoIntoSentences(videoElements[0], getSentences(videoElements[0].textContent, 3));
}

function getSentence(text, repeat) {
    const sentences = text.split('. ');
    const result = [];
   
    for (let i = 0; i < repeat; i++) {
      for (const sentence of sentences) {
        result.push(sentence);
      }
    }
   
    return result.join('. ');
   }
   