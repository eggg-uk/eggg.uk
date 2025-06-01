const queryString = window.location.search
const passedParams = new URLSearchParams(queryString)

if (!passedParams){
  console.log("No time zones passed in URL, using default")
} else {
  console.log(passedParams["timezone"]);
}
