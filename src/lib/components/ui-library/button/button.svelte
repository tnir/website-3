<script lang="ts">
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  import type { ButtonSizes, ButtonVariations } from "./button";
  let className: string = "";
  export { className as class };
  export let size: ButtonSizes = "medium";
  export let variant: ButtonVariations;
  export let disabled: boolean = false;

  const classMap = {
    primary: "bg-primary dark:text-black hover:bg-brand-hover",
    secondary: "bg-salmon hover:bg-salmon-hover focus:bg-salmon-hover",
    tertiary: "bg-important text-white hover:bg-less-important",
    cta: "bg-sand-dark dark:bg-gray-800 dark:text-sand-dark hover:bg-tertiary hover:dark:bg-red-400 focus:bg-tertiary",
    gray: "bg-sand-dark text-important hover:bg-tertiary focus:bg-tertiary hover:text-important focus:text-important",
    disabled: "pointer-events-none text-body bg-sand-dark",
    medium: "py-2 px-6 text-btn-small leading-4 rounded-xl",
    large: " py-3 px-8 text-p-medium leading-[1.25] min-w-[10rem] rounded-2xl",
    small: "py-1 px-4 text-p-xsmall rounded-xl",
    unstyled: "",
  };

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<button
  use:forwardEvents
  {disabled}
  class:disabled
  class="
    transition-all 
    duration-200 
    delay-[50ms] 
    inline-block 
    text-center 
    shadow-light 
    font-semibold 
    whitespace-nowrap
    bg-none
    text-black
    {classMap[variant]} 
    {classMap[size]} 
    {className}
  "
  {...$$restProps}
>
  <slot name="image" />
  <slot />
</button>
