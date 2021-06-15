<script lang="ts">
    import type { IPoint } from './diagram';
    export let routePoints: IPoint[];
    export let pointsVisible: boolean;
    export let hoverPoints: IPoint[];
</script>



{#if pointsVisible}
    {#each routePoints as point}
        <circle class='main' cy={point.y} cx={point.x} r='5'></circle>
    {/each}

    {#each hoverPoints as point}
        <circle class='hover' cy={point.y} cx={point.x} r='4'></circle>
    {/each}
{/if}



<style>
    .main {
     cursor: pointer;
     fill: #00abd6;
    }

    .hover {
        cursor: pointer;
        fill: #00abd6;
        fill-opacity: 0.15;
    }
</style>