import Game from './game.js';
import UI from './ui.js';

export default class Stats {
  constructor() {
    this.startTime = Date.now();
    this.ui = new StatsUI();
    this.longest = 0;
    this.mostDistinctLetters = 0;
    this.hints = 0;
  }

  init() {
    this.timer = setInterval(() => {
      this.updateWordsPerMinute();
    }, 30000);
  }

  set foundWord(foundWord) {
    if (foundWord.length > this.longest) {
      this.longest = foundWord.length;
      this.ui.setLongestWordCount(this.longest);
    }

    const distinctLetters = new Set(foundWord);
    if (distinctLetters.size > this.mostDistinctLetters) {
      this.mostDistinctLetters = distinctLetters.size;
      this.ui.setMostLetters(this.mostDistinctLetters);
    }
  }

  set foundWords(foundWords) {
    this._foundWords = foundWords;
    this.ui.setFoundWordCount(foundWords.size);

    if (this._totalWordCount) {
      this.ui.setProgress(foundWords.size, this._totalWordCount);
    }

    this._points = this.getTotalPoints(foundWords);
    this.ui.setPoints(this._points, this._maxPoints);

    if (!foundWords.size) {
      return;
    }

    const totalLength = Array.from(foundWords).reduce((sum, word) => sum += word.length, 0);
    const avgLength = totalLength / foundWords.size;
    this.ui.setAverageWordLength(avgLength);

    this.updateWordsPerMinute();

    this.ui.setFoundPercent(`${(foundWords.size * 100 / this._totalWordCount).toFixed(0)}%`);
  }

  set maxPoints(points) {
    //change to 25
    this._maxPoints = 25;
    this.ui.setMaxPoints(25);
  }

  set totalWordCount(totalWordCount) {
    this._totalWordCount = totalWordCount;
    this.ui.setTotalWordCount(totalWordCount);
  }

  getTotalPoints(words) {
    return Array.from(words).reduce((sum, word) => {
      return sum += this.getPoints(word);
    }, 0);
  }

  getPoints(word) {
    if (word.length <= 4) {
      return 1;
    } else if (word.length == 5) {
      return 2;
    } else if (word.length == 6) {
      return 3;
    } else if (word.length >= 7 && !this.isPangram(word)) {
      return 5;
    } else {
      return 7;
    }
  }

  isPangram(word) {
    return new Set(word).size >= 7;
  }

  updateWordsPerMinute() {
    const wordsPerMinute = this._foundWords.size / ((Date.now() - this.startTime) / 60000);
    this.ui.setWordsPerMinute(wordsPerMinute);

    //edit
    const mytimer = ((Date.now() - this.startTime));
    this.ui.setWordsPerMinute(mytimer);
  }

  toggleStats(force) {
    this.ui.toggleStats(force);
  }

  countHint(numHints) {
    numHints = numHints || 1;
    this.hints += numHints;
    this.ui.setHints(this.hints);
  }

  clearTimer() {			
    const times = ((Date.now() - this.startTime)/1000);
    clearTimeout(this.timer);

    var name = window.prompt("Enter your name: ");
    alert("Your name is " + name + "\nYou Reached the High score of 2048" + "\nCheck Leaderboard if yout time made it!\n" + name + "'s time: " + times );
	// request initializer
	const xhr = new XMLHttpRequest();
	// especify the API end-point
	xhr.open("POST", "https://txstate.oscarfortanel.dev/CS3398/kidzblocks/api/v1/highScoreSubmit.php", true);
	// declare data structure for data to be sent
	this.data = new FormData();

	// debug message
	console.log("Clicked\n");
	// set requiered fields
	this.data.append("api_token", "8b444736f91f991ce2ab67da833d8d784674a546f8b27d12461dd58992bb20b9");
	this.data.append("name", name);
	this.data.append("score", times);
	this.data.append("g_id", 4);

	// send request
	xhr.send(this.data);

	// print out request response
	xhr.onload = () => console.log(xhr.response);    
    
  for (var i = 0; i < 99999; i+=2)
  {
    i--;
  }
    location.reload();
  
  }
}
class StatsUI extends UI {
  constructor() {
    super();
    this.toggleButton = StatsUI.getEl('toggle-stats');
    this.expandedStats = StatsUI.getEl('expanded-stats');
    this.progressBar = StatsUI.getEl('progress-bar');
    this.points = StatsUI.getEl('num-points');
    this.maxPoints = StatsUI.getEl('max-points');
    this.foundWordCount = StatsUI.getEl('found');
    this.foundPercent = StatsUI.getEl('found-pct');
    this.totalWordCount = StatsUI.getEl('total');
    this.longestWordCount = StatsUI.getEl('longest');
    this.mostLetters = StatsUI.getEl('most-letters');
    this.avgLength = StatsUI.getEl('avg-length');
    this.wordsPerMinute = StatsUI.getEl('wpm');
    this.hints = StatsUI.getEl('hints');

    this.init();
  }

  init() {
    this.toggleButton.addEventListener('click', e => {
      this.toggleStats();
    });
  }

  toggleStats(force) {
    this.expandedStats.classList.toggle('hidden', force);
  }

  setPoints(points, maxPoints) {
    this.points.innerText = points;
    this.setMaxPoints(maxPoints);

    if (maxPoints) {
      this.setProgress(points, maxPoints);
    }
  }

  setMaxPoints(points) {
    this.maxPoints.innerText = points;
  }

  setFoundWordCount(foundWordCount) {
    this.foundWordCount.innerText = foundWordCount;
  }

  setTotalWordCount(totalWordCount) {
    this.totalWordCount.innerText = totalWordCount;
  }

  setFoundPercent(foundPercent) {
    this.foundPercent.innerText = foundPercent;
  }

  setProgress(points, maxPoints) {
    this.progressBar.style.width = `${points * 100 / maxPoints}%`;
    if (maxPoints == points){
      //
    }
  }

  setLongestWordCount(longestWordCount) {
    this.longestWordCount.innerText = longestWordCount;
  }

  setMostLetters(mostLetters) {
    this.mostLetters.innerText = mostLetters;
  }

  setAverageWordLength(avgLength) {
    this.avgLength.innerText = avgLength.toFixed(1);
  }

  setWordsPerMinute(wordsPerMinute) {
    this.wordsPerMinute.innerText = wordsPerMinute.toFixed(1);
  }

  setHints(hints) {
    this.hints.innerText = hints;
  }
} 
