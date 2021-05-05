<marker
  id="fromOne"
  markerWidth="16"
  markerHeight="16"
  refX="-5"
  refY="6"
  orient="auto"
>
  <rect x="0" y="-8" width="1" height="20" />
</marker>

<marker
  id="fromMany"
  markerWidth="16"
  markerHeight="16"
  refX="0"
  refY="0"
  orient="auto"
  viewBox="-8 -8 16 16"
>
  <rect x="7" y="-6" width="1" height="12" />
  <path d="M 0,8 L 8,0 M 0,-8 L 8,0" stroke="red" stroke-width="1" />
</marker>

<marker
  id="toOne"
  markerWidth="16"
  markerHeight="16"
  refX="10"
  refY="6"
  orient="auto"
>
  <rect x="4" y="-8" width="1" height="20" />
</marker>

<marker
  id="toMany"
  markerWidth="16"
  markerHeight="16"
  refX="8"
  refY="0"
  orient="auto"
  viewBox="-8 -8 16 16"
>
  <rect x="0" y="-6" width="1" height="12" />
  <path d="M 0,0 L 8,6 M 0,0 L 8,-6" stroke="red" stroke-width="1" />
</marker>

<style>
  marker {
    fill: red;
  }
</style>
