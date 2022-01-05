const inspector = require('inspector');
const fs = require('fs');
const session = new inspector.Session();

const fd = fs.openSync('profile.heapsnapshot', 'w');

session.connect();
function outerMyssss() {
  var someOneMy = '100000000'
  var someTextsssss1 = new Array(1000)
    function inner() {
        return someTextsssss1
    }

}
outerMyssss()

outerMyssss = null
// 抓取快照
session.on('HeapProfiler.addHeapSnapshotChunk', (m) => {
  fs.writeSync(fd, m.params.chunk);
});

session.post('HeapProfiler.takeHeapSnapshot', null, (err, r) => {
  console.log('Runtime.takeHeapSnapshot done:', err, r);
  session.disconnect();
  fs.closeSync(fd);
});