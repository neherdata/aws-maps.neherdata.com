const apiKey =
  "v1.public.eyJqdGkiOiJjZGEyMDBmNS1kN2RmLTQyNjktOWEyOC1iMDIxZDI3N2FhZGQifVy4F-kq1lfFOXxS_0V4-tT5rOa57ietpc-P8toXSmYo3c0oPwyTVQ00WcUbaJKDwq8jlCud0zmq50cRBfFGOWfUlVNy1I--FJweVK4j-WdSG7S-1Vf8E-TZbCk_ooceUZOhj9LQD4MD5HlZbaAAP6syK4Hz2wzsyjhGgEzk5y7bAGLdOmaNdJ2eFtGwK2XGpQfA8sKsfnwgevGWCAL77BdsHzaJMNrbKc9WXkIgt2VxvvoKk9qVzlrubYB5tMu_u09ZRuM6RlTxCV8xOTmTqlTKC20QdZo7DeRtx-lKY_XgrBYKPnwn2VXfpsyb5UKsP-AeFg_OzRe7GuXo36Sp55E.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
const region = "us-east-1";
const mapName = "ndsMap";
const styleUrl = `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`;
const map = new maplibregl.Map({
  container: "map",
  style: styleUrl,
  center: [-74.0697479, 40.3083382],
  zoom: 11,
});
map.addControl(new maplibregl.NavigationControl(), "top-left");
