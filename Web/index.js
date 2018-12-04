$('#img').mapster({
mapKey: 'zone',
singleSelect: true,
render_highlight: {
    stroke: true,
    fill: false,
    strokeColor: 'ffffb3',
    strokeWidth: 12
},
onClick: function (data) {
    window.location.href = data.e.srcElement.href;
  }
});




