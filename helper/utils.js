 function formatTime(seconds) {
  // Calculate minutes and seconds
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;

  // Add leading zero if necessary
  var formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
  var formattedSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;

  // Combine minutes and seconds in the desired format
  var formattedTime = formattedMinutes + ":" + formattedSeconds;

  return formattedTime;
}

module.exports={formatTime}