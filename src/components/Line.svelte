<script lang="ts">
  import type { IPoint } from "../interfaces/diagram";

  export let points: IPoint[];

  const conv = (p: IPoint[]): string =>
    p.reduce((curV, _) => {
      const v = `${_.x} ${_.y}`;
      return curV === "" ? v : `${curV}, ${v}`;
    }, "");
</script>

<polyline points={conv(points)} />

<style>
  polyline {
    stroke: red;
    stroke-width: 2;
    fill: transparent;
  }
</style>
