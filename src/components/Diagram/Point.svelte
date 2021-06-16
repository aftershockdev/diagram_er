<script lang="ts">
    import type { IPoint } from './diagram';
    export let routePoints: IPoint[];
    export let pointsVisible: boolean;
    export let linesBreakPoints: IPoint[];
</script>

{#if pointsVisible}
    {#each routePoints as point}
        <circle class='main' cy={point.y} cx={point.x} r='3'></circle>
    {/each}

    {#each linesBreakPoints as point}
        <circle class='break' cy={point.y} cx={point.x} r='3'></circle>
    {/each}
{/if}

<style>
    circle {
        cursor: pointer;
    }
    .main {
     fill: #00abd6;
    }

    .break {
        fill: #00abd6;
        fill-opacity: 0.15;
    }
</style>