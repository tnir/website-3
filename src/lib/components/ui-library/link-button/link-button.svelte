<script lang="ts">
  import { buttonsClassMap } from "$lib/assets/buttons-class-map";
  import { current_component } from "svelte/internal";
  import { forwardEventsBuilder } from "../utils/eventforwarder";
  import type { ButtonSizes, ButtonVariations } from "./link-button";

  let className: string = "";
  export { className as class };
  export let variant: ButtonVariations;
  export let size: ButtonSizes = "medium";
  export let disabled: boolean = false;
  export let href: string;

  const classMap = buttonsClassMap;

  const forwardEvents = forwardEventsBuilder(current_component);
</script>

<a
  use:forwardEvents
  {href}
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
    {classMap[variant]} 
    {classMap[size]} 
    {className}
  "
  {...$$restProps}
>
  <slot name="image" />
  <slot />
</a>
