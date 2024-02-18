const apiKey = "v1.public.eyJqdGkiOiI1YWE4OWU5Yy1kZTAzLTQ2MjQtYmI5OS05NWNiMDc3NmViMjMifQiQa2xfpxCsmRGGyaNZxHB_-WS6fYvG2je5SFdPJdwo6f2C5uQtbRfR6L-jjc8nOqGnb4f3T5Sn3BYDxWXJT3VENDiSRzg9bDX8y3oUzU4nPMITEPaKxwSkA2Vfiuhl4Jfl8dVvh2Tn-WmOoAePy9TJHSt5KJeTDm2KRKaaA8YSBSzuWzHXXgQlUlI2a1NQDkBVPc_8On4y-zQnVjPTWo2xXDl1BC-oiWCuZY-K-zm3SSgt28pHobZyzBH2OG88h9pVMWJ01G0cLU7ybPsqO585m8SLcXgDzAbEMggTR1qSCGDjR2USdXLE9SdLLaEw58Vutu9gsaMkufm8AHqu3Co.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
const mapName = "aws-maps.neherdata.com";
const region = "us-east-1";

const map = new maplibregl.Map({
  container: "map",
  style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
  center: [-74.0697479, 40.3083382],
  zoom: 11,
});
map.addControl(new maplibregl.NavigationControl(), "top-left");
