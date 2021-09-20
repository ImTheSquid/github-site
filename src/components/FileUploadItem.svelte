<script>
    export let fileData;
    export let disabled;
</script>

<svelte:options immutable/>

<hr/>
<div class="parent">
    <p>{fileData.name}</p>
    <p class="fileSize">{(fileData.size / 1000000).toFixed(2)} MB</p>
    <button class="removeButton" disabled="{disabled}" on:click>Remove</button>
</div>
<hr/>

<style>
    .parent {
        padding: 5px 1em 5px 1em;
        gap: 10px;
        background-color: #ddd;
        display: flex;
        flex-direction: row;
    }

    .fileSize {
        margin-top: auto;
        margin-bottom: auto;
        font-size: smaller;
        color: #444;
        text-align: center;
    }

    hr {
        margin: 0;
    }

    .removeButton {
        margin: auto;
        margin-right: 5px;
    }
</style>