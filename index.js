const getResponse = await fetch("https://localhost:7192/testimonials");
const testimonialsJson = await getResponse.json();
const testimonialsList = document.querySelector('ul[name="testimonials_list"]');
for (let i = 0; i < testimonialsJson.length; i++) {
  const testimonial = testimonialsJson[i];
  const { feedback, rating } = testimonial;
  const newLi = document.createElement("li");
  newLi.innerText = `Feedback: ${feedback}, Rating: ${rating}`;
  testimonialsList.appendChild(newLi);
}

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const body = {
    Feedback: formData.get("feedback"),
    Rating: formData.get("rating"),
  };
  await fetch("https://localhost:7192/testimonials", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  location.reload();
});
