<script>
    import Navbar from '../../components/Navbar.svelte';
    import FileUpload from '../../components/FileUpload.svelte'
    import { metatags } from '@roxi/routify';
    import { reassembleFiles } from './reassembler';
    
    metatags.title = 'DLFC Converter';
    metatags.description = 'Converts DLFC files into their original form.';

    let files = [];
    let disabled = false;

    function startReassembly() {
        disabled = true;
        reassembleFiles(files).then(result => {
            if (!result[0]) {
                alert(`Failed to reassemble files: ${result[1]}`);
                files = [];
                disabled = false;
                return;
            }

            const url = window.URL.createObjectURL(new Blob([result[1]], {type: 'application/octet-stream'}));
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = url;
            const name = files[0].name;
            downloadLink.download = name.slice(name.indexOf("_") + 1, name.length - 5);
            downloadLink.click();
            window.URL.revokeObjectURL(url);
            alert('File reassembly complete!');
            disabled = false;
            files = [];
        });
    }
</script>

<Navbar/>

<div class="parent">
    <h1>DLFC Converter</h1>
    <h4>This utility will only reassemble one full file at a time.<br/>Upload your DLFC files to get started:</h4>

    <FileUpload bind:files disabled="{disabled}"/>
    {#if files.length > 0}
        <button disabled="{disabled}" on:click="{startReassembly}">Reassemble File</button>
    {/if}
    <a href="/" download="test" id="downloadLink">Download Files</a>
</div>

<style>
    div {
        text-align: center;
        margin: auto;
        width: 70%;
        height: 80%;
    }

    .parent {
        margin-top: 5em;
    }

    #downloadLink {
        display: none;
    }
</style>