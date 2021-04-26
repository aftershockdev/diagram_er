<script lang="ts">
  import Table from './Table.svelte';
  import type { IDataModel, ITablePosition } from '../interfaces/diagram';
  export let data: IDataModel[];
  export let tablesPosition: ITablePosition;

  interface IDistance {
    x: number,
    y: number
  }

  const distance: IDistance = { x: 0, y: 0 };

  let table: HTMLElement;
  let name: string;


  const onDown = (e: MouseEvent, element: HTMLElement, tableName: string) => {
    table = element
    name = tableName

    distance.x = Math.abs(table.offsetLeft - e.clientX);
    distance.y = Math.abs(table.offsetTop - e.clientY);
    table.style.pointerEvents = 'none';
  };

  const onUp = (e: MouseEvent) => {
    const position = tablesPosition[name]
    position.left = e.clientX - distance.x;
    position.top = e.clientY - distance.y;

    table.style.pointerEvents = 'initial';
  };

  const onMove = (e: MouseEvent) =>  {
    if (table && table.style.pointerEvents === 'none') {
       table.style.left = `${e.clientX - distance.x}px`;
       table.style.top = `${e.clientY - distance.y}px`;
    };
  };
</script>

<div class="diagram"
  on:mousemove={onMove}
  on:mouseup={onUp}
>
  {#each data as list}
    <Table data={list} position={tablesPosition} onDown={onDown} />
  {/each}
</div>


<style>
.diagram {
  height: 800px;
  margin-bottom: 10px;
  position: relative;
  background: rgba(0, 0, 0, .1);
}

</style>
