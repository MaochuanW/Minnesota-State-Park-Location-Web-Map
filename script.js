require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "ec0732e2a47544bb827e5849d35297b5"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});