<script>
    import { url } from '@roxi/routify';
</script>

<nav>
    <ul>
        <li><a href={$url("/")}>ImTheSquid</a></li>
        <li><a href={$url("/df-converter")}>DLFC Converter</a></li>
    </ul>
</nav>

<style>
    nav {
        border-radius: 10px;
        background: linear-gradient(45deg, rgba(255,64,80,1) 0%, rgba(6,143,171,1) 100%);
        color: white;
        margin: 0.1em;
        overflow: hidden;
        filter: drop-shadow(0.1em 0.4em 0.2em gray);
        height: 3.5em;
    }

    ul {
        display: flex;
        text-align: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li a {
        display: inline-block;
        padding: 16px;
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1.5em;
    }

    li a:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>