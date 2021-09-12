'use strict'

   //// heading secondary hr
   const heading = document.querySelector(".heading_secondary");
   const hr_element = document.createElement("hr");
   hr_element.classList.add("heading_hr");
   heading.insertAdjacentElement("afterend", hr_element);

   //// heading tertiary hr
   const headings = document.querySelectorAll(".article_title");
   headings.forEach((h) => {
     const hr_tertiary = document.createElement("hr");
     hr_tertiary.classList.add('hr_tertiary')
     h.insertAdjacentElement("beforeend", hr_tertiary);
   });