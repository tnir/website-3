---
section: ides-and-editors
title: VS Code Settings Sync
---

<script context="module">
  export const prerender = true;
</script>

# {title}

VS Code is so belowed hugely because of its endless possibilities for customization. A problem arises when there are multiple machines or VS Code instances you'd like to have with the same extensions, themes and settings.

The solution for exactly this and a bunch more is called Settings Sync. It saves all your preferences to the cloud so that you simply log in to the same account on all of your instances and have all your settings in sync.

## How does it work?

When Settings Sync is running, it polls the backend for changes on an interval and at the same time makes sure that after any change to your preferences, these changes are pushed back. After the initial (first) sync, only the changed items are pushed to the backend server to save bandwidth and make the syncronization nearly instant.

The following items are synced when you use Settings Sync:

- Settings - your VS Code preferences [[docs](https://code.visualstudio.com/docs/getstarted/settings)]
- Keybindings - your keyboard shortcuts [[docs](https://code.visualstudio.com/docs/getstarted/keybindings)]
- Snippets - [[docs](https://code.visualstudio.com/docs/editor/userdefinedsnippets)]
- Tasks [[docs](https://code.visualstudio.com/Docs/editor/tasks#_user-level-tasks)]
- Global State - used by extensions to preserve state

## On the web

### On Gitpod

If you are using Gitpod with VS Code Web, Settings Sync should already work out of the box with no additional configuration needed. You can verify this by opening the Account menu in VS Code and checking that the last line says `Settings Sync is On`.

### On Codespaces, vscode.dev and others

We don't have support for these environments, yet, but are actively looking into it.

## Locally

By default, your local VS Code installation is _most likely_ equipped with a pre-configured setup to sync all of your IDE-related settings via a GitHub or a Microsoft account. This means that your preferences are synced to Microsoft's servers and that means Gitpod has no access to them.

You can change this fact and sync all of your preferences to Gitpod instead. You will not lose any data by doing this, but if you still want to sync your settings across machines we recommend you to do the same on all of them as well.

1. Make sure the [Gitpod extension](https://marketplace.visualstudio.com/items?itemName=gitpod.gitpod-desktop) is installed and enabled.
2. Hit <kbd>F1</kbd> to open the Command Pallete and run `Gitpod: Turn on Settings Sync`.
3. Complete the login process by clicking on the `Accounts` menu and selecting `Sign in to Settings Sync`. This will open Gitpod where you can just follow the steps to allow Settings sync from your local VS Code.
4. Yay; it's done 🎉! Extensions and other preferences should start syncing right away. For troubleshooting you can take a look at `OUTPUT` > `Log (Settings Sync)`.

If you want to read more about Settings Sync and how it works please refer to [VS Code's Settings Sync documentation](https://code.visualstudio.com/docs/editor/settings-sync).
