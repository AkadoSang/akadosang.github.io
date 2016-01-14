var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

<a href="javascript:void(0)" onclick="toggleExpand()">Click here to enlarge all images.</a>
<script type="text/javascript">
function toggleExpand() {
    var expanded = true;
    $('img').each(function() {
        if (!$(this).hasClass('expanded')) {
            expanded = false;
            return false;
        }
    });
    $('a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".bmp"]').children('img').each(function() {
        if (expanded)
            $(this).removeClass('expanded');
        else
            $(this).addClass('expanded');
    });
}
</script>