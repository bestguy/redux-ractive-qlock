import Ractive from 'ractive'
import './Clock.css'

const led = Ractive.extend({
  isolated: true,
  template: '{{#on}}<b>{{yield}}</b>{{/}}{{^on}}{{yield}}{{/}}'
})

export default Ractive.extend({
  isolated: true,
  components: {
    led
  },
  template: `{{#with time}}
<pre>
<led on="true">IT</led>L<led on="true">IS</led>BFAMPM
<led on="{{quarter}}">A</led>C<led on="{{quarter}}">QUARTER</led>DC
<led on="{{twentyMinutes}}">TWENTY</led><led on="{{fiveMinutes}}">FIVE</led>X
<led on="{{half}}">HALF</led>B<led on="{{tenMinutes}}">TEN</led>F<led on="{{to}}">TO</led>
<led on="{{past}}">PAST</led>ERU<led on="{{h == 9}}">NINE</led>
<led on="{{h == 1}}">ONE</led><led on="{{h == 6}}">SIX</led><led on="{{h == 3}}">THREE</led>
<led on="{{h == 4}}">FOUR</led><led on="{{h == 5}}">FIVE</led><led on="{{h == 2}}">TWO</led>
<led on="{{h == 8}}">EIGHT</led><led on="{{h == 11}}">ELEVEN</led>
<led on="{{h == 7}}">SEVEN</led><led on="{{h == 0}}">TWELVE</led>
<led on="{{h == 10}}">TEN</led>SE<led on="{{oclock}}">OCLOCK</led>
<led on="{{oneMinute}}">.</led>  <led on="{{twoMinutes}}">.</led>  <led on="{{threeMinutes}}">.</led>  <led on="{{fourMinutes}}">.</led>
</pre>
{{/with}}`
});
