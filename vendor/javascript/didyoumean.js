var n={};(function(){function didYouMean(n,e,t){if(!n)return null;didYouMean.caseSensitive||(n=n.toLowerCase());var u,i=null===didYouMean.threshold?null:didYouMean.threshold*n.length,a=didYouMean.thresholdAbsolute;u=null!==i&&null!==a?Math.min(i,a):null!==i?i:null!==a?a:null;var r,d,l,o,M,h=e.length;for(M=0;M<h;M++){d=e[M];t&&(d=d[t]);if(d){l=didYouMean.caseSensitive?d:d.toLowerCase();o=getEditDistance(n,l,u);if(null===u||o<u){u=o;r=t&&didYouMean.returnWinningObject?e[M]:d;if(didYouMean.returnFirstMatch)return r}}}return r||didYouMean.nullResultValue}didYouMean.threshold=.4;didYouMean.thresholdAbsolute=20;didYouMean.caseSensitive=false;didYouMean.nullResultValue=null;didYouMean.returnWinningObject=null;didYouMean.returnFirstMatch=false;n?n=didYouMean:window.didYouMean=didYouMean;var e=Math.pow(2,32)-1;function getEditDistance(n,t,u){u=u||0===u?u:e;var i=n.length;var a=t.length;if(0===i)return Math.min(u+1,a);if(0===a)return Math.min(u+1,i);if(Math.abs(i-a)>u)return u+1;var r,d,l,o,M,h=[];for(r=0;r<=a;r++)h[r]=[r];for(d=0;d<=i;d++)h[0][d]=d;for(r=1;r<=a;r++){l=e;o=1;r>u&&(o=r-u);M=a+1;M>u+r&&(M=u+r);for(d=1;d<=i;d++){d<o||d>M?h[r][d]=u+1:t.charAt(r-1)===n.charAt(d-1)?h[r][d]=h[r-1][d-1]:h[r][d]=Math.min(h[r-1][d-1]+1,Math.min(h[r][d-1]+1,h[r-1][d]+1));h[r][d]<l&&(l=h[r][d])}if(l>u)return u+1}return h[a][i]}})();var e=n;export default e;
