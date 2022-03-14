<script>
    export let onClickHandler
    export let disabled
</script>

<button on:click="{(e) => onClickHandler(e)}" {disabled}><slot /></button>

<style lang="scss">
    button {
        padding: 0.9rem 0.6rem 0.8rem;
        min-width: 500px;
        border-radius: 0.7rem;
        color: white;
        font-size: 0.8rem;
        background-color: #2b2b2b;
        text-align: center;

        &:hover {
            background-color: #3d3d3d;
            cursor: pointer;
        }

        &:disabled {
            background-color: #141414;
        }
    }
</style>