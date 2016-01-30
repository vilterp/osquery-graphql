import { Promise } from 'bluebird';
import { spawn } from 'child_process';

export default function osquery(query) {
  return new Promise(function(resolve, reject) {
    var buffer = '';
    var osqueryProcess = spawn('/usr/local/bin/osqueryi', [query, '--json']);
    osqueryProcess.stdout.on('data', function(chunk) {
      buffer += chunk;
    });
    osqueryProcess.on('exit', function(code) {
      if(code == 0) {
        resolve(JSON.parse(buffer));
      } else {
        reject('exit code ' + code)
      }
    });
  });
}
