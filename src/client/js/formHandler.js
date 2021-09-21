import axios from 'axios';

export const handleSubmit = (event) => {
  event.preventDefault();

  const agreement = document.getElementById('agreement');
  const subjectivity = document.getElementById('subjectivity');
  const confidence = document.getElementById('confidence');
  const irony = document.getElementById('irony');
  const score_tag = document.getElementById('score_tag');

  const inputVal = document.getElementById('article-url').value;

  if (!Client.validateUrl(inputVal)) return alert('Please enter valide Url');

  axios
    .post('http://localhost:8081/post', {
      url: inputVal,
    })
    .then(({ data }) => {
      agreement.innerText = `agreement: ${data.agreement}`;
      subjectivity.innerText = `subjectivity: ${data.subjectivity}`;
      confidence.innerText = `confidence: ${data.confidence}`;
      irony.innerText = `irony: ${data.irony}`;
      score_tag.innerText = `score tag: ${data.score_tag}`;
    })
    .catch((err) => {
      console.log(err);
      alert('Error');
    });
};
