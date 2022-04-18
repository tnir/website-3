<script lang="ts">
  const handleChange = () => {
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    if (theme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");

      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");

      localStorage.setItem("theme", "dark");
    }
  };
</script>

<div>
  <label>
    <input type="checkbox" on:change={handleChange} />
    <span>Switch Theme</span>
  </label>
</div>
