<script>
    import FileUploadItem from './FileUploadItem.svelte';
    export let files;
    export let disabled;

    function fileDrop(e) {
        e.preventDefault();

        if (e.dataTransfer.files) {
            const fileArr = [...e.dataTransfer.files];
            files = [...files, ...fileArr.filter(file => file.name.endsWith(".dlfc"))];
        }
    }

    function fileUpload(e) {
        const fileArr = [...e.target.files];
        files = [...files, ...fileArr.filter(file => file.name.endsWith(".dlfc"))];
    }

    function removeFile(file) {
        const fileIndex = files.indexOf(file);
        if (files.length === 1) {
            files = [];
        } else {
            files.splice(fileIndex, 1);
            files = files;
        }
    }
</script>

<div class="uploadBox" disabled="{disabled}" on:drop="{fileDrop}" on:dragover="{e => e.preventDefault()}">
    {#if files.length === 0}
        <div class="manualUpload">
            <p>Drag and Drop or Manual Select:</p>
            <button on:click="{() => document.getElementById("fileUpload").click()}">Upload Files</button>
        </div>
    {:else}
        {#each files as file}
            <FileUploadItem fileData={file} disabled="{disabled}" on:click="{() => removeFile(file)}"/>
        {/each}
    {/if}

    <input type="file" multiple id="fileUpload" on:input="{fileUpload}" accept=".dlfc"/>
</div>

{#if files.length > 0}
    <button class="uploadMore" disabled="{disabled}" on:click="{() => document.getElementById("fileUpload").click()}">Upload More Files</button>
{/if}

<style>
    .uploadBox {
        margin: auto;
        background-color: darkgray;
        width: 65%;
        height: 40%;
        border-radius: 10px;
        margin-top: 3em;
        overflow-x: hidden;
        overflow-y: auto;
        transition: ease all 0.5s;
        filter: var(--floating-shadow);
    }

    @media screen and (max-width: 1100px) {
        .uploadBox {
            width: 100%;
        }
    }

    .manualUpload {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .uploadMore {
        margin: 1em;
    }

    #fileUpload {
        display: none;
    }
</style>