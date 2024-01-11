function eTri (S,H,W,Cx,Cy) {
	var theta =  Math.PI/3;
	var phi = Math.PI/6;
	var th = Math.sin(theta)*S;
	var ch = Math.tan(phi)*S/2;
	var r = Math.sqrt(Math.pow(S/2,2) + Math.pow(ch,2));
	var tcx = W/2 + Cx;
	var tcy = H/2 + Cy;
	var x1 = tcx - S/2 + Cx;
	var y1 = tcy - ch + Cy;
	var x2 = tcx + S/2 + Cx;
	var y2 = tcy - ch + Cy;
	var x3 = W/2 + Cx;
	var y3 = tcy + r + Cy;
        var rett = [[x1,x2,x3,tcx],[y1,y2,y3,tcy]];
	return rett;
}

function svg_eTri(id,width,height,side,Cx,Cy,fill){
  document.write('<svg width="' + width + '" height="' + height + '">');
  var animvals = (eTri(side,width,height,Cx,Cy));
  var pStr = animvals[0][0].toString() + "," + animvals[1][0].toString() + " " + animvals[0][1].toString() + "," + animvals[1][1].toString() + " " + animvals[0][2].toString() + "," + animvals[1][2].toString();
  var rStr = animvals[0][3].toString() + " " + animvals[1][3].toString();
  document.write('<polygon id=' + id + ' points="' + pStr + '" stroke-linejoin="round" fill="' + fill + '">');
  document.write('<animateTransform\n xlink:href="#' + id + '" \nattributeName="transform" \nattributeType="XML" \ntype="rotate" \nfrom="0 ' + rStr + '" \nto="360 ' + rStr + '" \ndur="2s" \nbegin="0s;" \nrepeatCount = "indefinite" \nfill="freeze" \n/>');
  document.write('</svg>');
}