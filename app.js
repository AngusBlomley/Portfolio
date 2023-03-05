const elements = document.querySelectorAll(".bar");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});

const elements2 = document.querySelectorAll(".blurr");

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("blurr-in");
      observer.unobserve(entry.target);
    }
  });
});

elements2.forEach(element => {
  observer.observe(element);
});