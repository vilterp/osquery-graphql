import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql';
import osquery from './osquery';

// TODO: query
  // optional parameter for each column
  /*  resolve()  {
        return osquery('select * from TABLENAME')
      }
  */
// types:
  // generated from the columns in the table
  // w/b joins though
  // ugh

const socketType = new GraphQLObjectType({
  name: 'Socket',
  fields: () => ({
    pid: {
      type: GraphQLInt,
      description: "Process (or thread) ID"
    },
    fd: {
      type: GraphQLInt,
      description: "Socket file descriptor number"
    },
    socket: {
      type: GraphQLInt,
      description: "Socket handle or inode number"
    },
    family: {
      type: GraphQLInt,
      description: "Network protocol (IPv4, IPv6)"
    },
    protocol: {
      type: GraphQLInt,
      description: "Transport protocol (TCP/UDP)"
    },
    local_address: {
      type: GraphQLString,
      description: "Socket local address"
    },
    remote_address: {
      type: GraphQLString,
      description: "Socket remote address"
    },
    local_port: {
      type: GraphQLInt,
      description: "Socket local port"
    },
    remote_port: {
      type: GraphQLInt,
      description: "Socket remote port"
    },
    path: {
      type: GraphQLString,
      description: "For UNIX sockets (family=AF_UNIX), the domain path"
    },
  })
});

const listeningPortType = new GraphQLObjectType({
  name: 'ListeningPort',
  description: "Processes with listening (bound) network sockets/ports.",
  fields: () => ({
    pid: {
      type: GraphQLInt,
      description: "Process (or thread) ID"
    },
    process: {
      type: processType,
      resolve: (port) => {
        // wtf
        return osquery(`select * from processes where pid = ${port.pid}`).then(first);
      }
    },
    port: {
      type: GraphQLInt,
      description: "Transport layer port"
    },
    protocol: {
      type: GraphQLInt,
      description: "Transport protocol (TCP/UDP)"
    },
    family: {
      type: GraphQLInt,
      description: "Network protocol (IPv4, IPv6)"
    },
    address: {
      type: GraphQLString,
      description: "Specific address for bind"
    },
  })
});

const processType = new GraphQLObjectType({
  name: 'Process',
  fields: () => ({
    pid: {
      type: GraphQLInt,
      description: "Process (or thread) ID"
    },
    name: {
      type: GraphQLString,
      description: "The process path or shorthand argv[0]"
    },
    path: {
      type: GraphQLString,
      description: "Path to executed binary"
    },
    cmdline: {
      type: GraphQLString,
      description: "Complete argv"
    },
    state: {
      type: GraphQLString,
      description: "Process state"
    },
    cwd: {
      type: GraphQLString,
      description: "Process current working directory"
    },
    root: {
      type: GraphQLString,
      description: "Process virtual root directory"
    },
    uid: {
      type: GraphQLInt,
      description: "Unsigned user ID"
    },
    gid: {
      type: GraphQLInt,
      description: "Unsigned group ID"
    },
    euid: {
      type: GraphQLInt,
      description: "Unsigned effective user ID"
    },
    egid: {
      type: GraphQLInt,
      description: "Unsigned effective group ID"
    },
    suid: {
      type: GraphQLInt,
      description: "Unsigned saved user ID"
    },
    sgid: {
      type: GraphQLInt,
      description: "Unsigned saved group ID"
    },
    on_disk: {
      type: GraphQLInt,
      description: "The process path exists yes=1, no=0, unknown=-1"
    },
    wired_size: {
      type: GraphQLInt,
      description: "Bytes of unpagable memory used by process"
    },
    resident_size: {
      type: GraphQLInt,
      description: "Bytes of private memory used by process"
    },
    phys_footprint: {
      type: GraphQLInt,
      description: "Bytes of total physical memory used"
    },
    user_time: {
      type: GraphQLInt,
      description: "CPU time spent in user space"
    },
    system_time: {
      type: GraphQLInt,
      description: "CPU time spent in kernel space"
    },
    start_time: {
      type: GraphQLInt,
      description: "Process start in seconds since boot (non-sleeping)"
    },
    parent: {
      type: GraphQLInt,
      description: "Process parent's PID"
    },
    group: {
      type: GraphQLInt,
      description: "Process group"
    },
    nice: {
      type: GraphQLInt,
      description: "Process nice level (-20 to 20, default 0)"
    },
    sockets: {
      name: 'sockets',
      type: new GraphQLList(socketType),
      resolve: (process) => (
        osquery(`select * from process_open_sockets where pid = ${process.pid}`)
      )
    },
    listening_ports: {
      name: 'listening_ports',
      type: new GraphQLList(listeningPortType),
      resolve: (process) => (
        osquery(`select * from listening_ports where pid = ${process.pid}`)
      )
    },
    open_files: {
      name: 'open_files',
      type: new GraphQLList(fileType),
      resolve: (process) => (
        osquery(`select * from process_open_files where pid = ${process.pid} limit 2`).then(
          (open_files) => Promise.all(open_files.map(
            (open_file) => osquery(`select * from file where path = '${open_file.path}'`).then(first)
          ))
        )
      )
    },
    executable: {
      name: 'executable',
      type: fileType,
      resolve: (process) => (
        osquery(`select * from file where path = '${process.path}'`).then(first)
      )
    }
  })
});

const fileType = new GraphQLObjectType({
  name: "file",
  description: "Interactive filesystem attributes and metadata.",
  fields: () => ({
    path: {
      type: GraphQLString,
      description: "Absolute file path"
    },
    directory: {
      type: GraphQLString,
      description: "Directory of file(s)"
    },
    filename: {
      type: GraphQLString,
      description: "Name portion of file path"
    },
    inode: {
      type: GraphQLInt,
      description: "Filesystem inode number"
    },
    uid: {
      type: GraphQLInt,
      description: "Owning user ID"
    },
    gid: {
      type: GraphQLInt,
      description: "Owning group ID"
    },
    mode: {
      type: GraphQLString,
      description: "Permission bits"
    },
    device: {
      type: GraphQLInt,
      description: "Device ID (optional)"
    },
    size: {
      type: GraphQLInt,
      description: "Size of file in bytes"
    },
    block_size: {
      type: GraphQLInt,
      description: " Block size of filesystem"
    },
    atime: {
      type: GraphQLInt,
      description: "Last access time"
    },
    mtime: {
      type: GraphQLInt,
      description: "Last modification time"
    },
    ctime: {
      type: GraphQLInt,
      description: "Last status change time"
    },
    btime: {
      type: GraphQLInt,
      description: "(B)irth or (cr)eate time"
    },
    hard_links: {
      type: GraphQLInt,
      description: "Number of hard links"
    },
    type: {
      type: GraphQLString,
      description: "File status"
    },
    process_instances: {
      type: new GraphQLList(processType),
      description: "instances of this file running as a process. opposite: `executable`",
      resolve: (file) => osquery(`select * from processes where path = '${file.path}'`)
    },
    opened_by_processes: {
      type: new GraphQLList(openFileType),
      description: "processes which have this file open",
      resolve: (file) => osquery(`select * from process_open_files where path = '${file.path}'`)
    }
  })
});

const openFileType = new GraphQLObjectType({
  name: 'OpenFile',
  fields: () => ({
    fd: {
      type: GraphQLInt,
      description: 'file descriptor'
    },
    process: {
      type: processType,
      resolve: (openFile) => osquery(`select * from processes where pid = ${openFile.pid}`)
    },
    file: {
      type: fileType,
      resolve: (openFile) => osquery(`select * from files where path = '${openFile.path}'`)
    }
  })
})


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // TODO: specific process
      processes: {
        type: new GraphQLList(processType),
        resolve: () => osquery('select * from processes')
      },
      process: {
        type: processType,
        args: {
          pid: {
            type: GraphQLInt
          }
        },
        resolve: (req, { pid }) => osquery(`select * from processes where pid = ${pid}`).then(first)
      },
      listening_ports: {
        type: new GraphQLList(listeningPortType),
        resolve: () => osquery('select * from listening_ports')
      },
      listening_port: {
        type: listeningPortType,
        args: {
          port: {
            type: GraphQLInt
          }
        },
        resolve: (req, { port }) =>
          osquery(`select * from listening_ports where port = ${port}`).then(first)
      },
      file: {
        type: fileType,
        args: {
          path: {
            type: GraphQLString
          }
        },
        resolve: (req, { path }) => osquery(`select * from file where path = '${path}'`).then(first)
      }
    }
  })
});


function first(res) {
  return res[0];
}