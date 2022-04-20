<script lang="ts">
  import { buttonsClassMap } from "$lib/assets/buttons-class-map";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  import type { ButtonSizes, ButtonVariations } from "./button";
  let className: string = "";
  export { className as class };
  export let size: ButtonSizes = "medium";
  export let variant: ButtonVariations;
  export let disabled: boolean = false;

  const classMap = buttonsClassMap;

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
