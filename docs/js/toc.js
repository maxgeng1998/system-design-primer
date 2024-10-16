<script>
  document.addEventListener("DOMContentLoaded", function () {
    // 获取所有标题 (h1, h2, h3, h4, h5, h6)
    const headings = document.querySelectorAll("h1, h2, h3");

    // 获取右侧栏的元素
    const toc = document.getElementById("right-sidebar");

    // 遍历每个标题，并为它们生成目录
    headings.forEach((heading, index) => {
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.classList.add("toc-link");

      toc.appendChild(link);
    });

    // 监听滚动事件，显示当前章节
    window.addEventListener("scroll", () => {
      let currentHeading = null;

      // 遍历标题，找出当前在视口中的标题
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentHeading = heading;
        }
      });

      // 更新右侧导航的高亮
      document.querySelectorAll(".toc-link").forEach((link) => {
        link.classList.remove("active");
        if (currentHeading && link.getAttribute("href") === `#${currentHeading.id}`) {
          link.classList.add("active");
        }
      });
    });
  });
</script>