// munged from https://osquery.io/docs/tables/#specs

export default [
  {
    "name": "acpi_tables",
    "description": "Firmware ACPI functional table common metadata and content.",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "ACPI table name"}
      {"name": "size", "type": "INTEGER_TYPE", "description": "Size of compiled table data"}
      {"name": "md5", "type": "TEXT_TYPE", "description": "MD5 hash of table content"}
    ]
  },
  {
    "name": "arp_cache",
    "description": "Address resolution cache, both static and dynamic (from ARP, NDP).",
    "columns": [
      {"name": "address", "type": "TEXT_TYPE", "description": "IPv4 address target"}
      {"name": "mac", "type": "TEXT_TYPE", "description": "MAC address of broadcasted address"}
      {"name": "interface", "type": "TEXT_TYPE", "description": "Interface of the network for the MAC"}
      {"name": "permanent", "type": "TEXT_TYPE", "description": "1 for true, 0 for false"}
    ]
  },
  {
    "name": "authorized_keys",
    "description": "A line-delimited authorized_keys table.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "The local owner of authorized_keys file"}
      {"name": "algorithm", "type": "TEXT_TYPE", "description": "algorithim of key"}
      {"name": "key", "type": "TEXT_TYPE", "description": "parsed authorized keys line"}
      {"name": "key_file", "type": "TEXT_TYPE", "description": "Path to the authorized_keys file"}
    ]
  },
  {
    "name": "block_devices",
    "description": "Block (buffered access) device file nodes: disks, ramdisks, and DMG containers.",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "Block device name"}
      {"name": "parent", "type": "TEXT_TYPE", "description": "Block device parent name"}
      {"name": "vendor", "type": "TEXT_TYPE", "description": "Block device vendor string"}
      {"name": "model", "type": "TEXT_TYPE", "description": "Block device model string identifier"}
      {"name": "size", "type": "BIGINT_TYPE", "description": "Block device size in bytes"}
      {"name": "uuid", "type": "TEXT_TYPE", "description": "Block device Universally Unique Identifier"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Block device type string"}
      {"name": "label", "type": "TEXT_TYPE", "description": "Block device label string"}
    ]
  },
  {
    "name": "chrome_extensions",
    "description": "Chrome browser extensions.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "The local user that owns the extension"}
      {"name": "name", "type": "TEXT_TYPE", "description": "Extension display name"}
      {"name": "identifier", "type": "TEXT_TYPE", "description": "Extension identifier"}
      {"name": "version", "type": "TEXT_TYPE", "description": "Extension-supplied version"}
      {"name": "description", "type": "TEXT_TYPE", "description": "Extension-optional description"}
      {"name": "locale", "type": "TEXT_TYPE", "description": "Default locale supported by extension"}
      {"name": "update_url", "type": "TEXT_TYPE", "description": "Extension-supplied update URI"}
      {"name": "author", "type": "TEXT_TYPE", "description": "Optional extension author"}
      {"name": "persistent", "type": "INTEGER_TYPE", "description": "1 If extension is persistent across all tabs else 0"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Path to extension folder"}
    ]
  },
  {
    "name": "cpuid",
    "description": "Useful CPU features from the cpuid ASM call.",
    "columns": [
      {"name": "feature", "type": "TEXT_TYPE", "description": "Present feature flags"}
      {"name": "value", "type": "TEXT_TYPE", "description": "Bit value or string"}
      {"name": "output_register", "type": "TEXT_TYPE", "description": "Register used to for feature value"}
      {"name": "output_bit", "type": "INTEGER_TYPE", "description": "Bit in register value for feature value"}
      {"name": "input_eax", "type": "TEXT_TYPE", "description": "Value of EAX used"}
    ]
  },
  {
    "name": "crontab",
    "description": "Line parsed values from system and user cron/tab.",
    "columns": [
      {"name": "event", "type": "TEXT_TYPE", "description": "The job @event name (rare)"}
      {"name": "minute", "type": "TEXT_TYPE", "description": "The exact minute for the job"}
      {"name": "hour", "type": "TEXT_TYPE", "description": "The hour of the day for the job"}
      {"name": "day_of_month", "type": "TEXT_TYPE", "description": "The day of the month for the job"}
      {"name": "month", "type": "TEXT_TYPE", "description": "The month of the year for the job"}
      {"name": "day_of_week", "type": "TEXT_TYPE", "description": "The day of the week for the job"}
      {"name": "command", "type": "TEXT_TYPE", "description": "Raw command string"}
      {"name": "path", "type": "TEXT_TYPE", "description": "File parsed"}
    ]
  },
  {
    "name": "device_file",
    "description": "Similar to the file table, but use TSK and allow block address access.",
    "columns": [
      {"name": "device", "type": "TEXT_TYPE", "description": "Absolute file path to device node"}
      {"name": "partition", "type": "TEXT_TYPE", "description": "A partition number"}
      {"name": "path", "type": "TEXT_TYPE", "description": "A logical path within the device node"}
      {"name": "filename", "type": "TEXT_TYPE", "description": "Name portion of file path"}
      {"name": "inode", "type": "BIGINT_TYPE", "description": "Filesystem inode number"}
      {"name": "uid", "type": "BIGINT_TYPE", "description": "Owning user ID"}
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Owning group ID"}
      {"name": "mode", "type": "TEXT_TYPE", "description": "Permission bits"}
      {"name": "size", "type": "BIGINT_TYPE", "description": "Size of file in bytes"}
      {"name": "block_size", "type": "INTEGER_TYPE", "description": "Block size of filesystem"}
      {"name": "atime", "type": "BIGINT_TYPE", "description": "Last access time"}
      {"name": "mtime", "type": "BIGINT_TYPE", "description": "Last modification time"}
      {"name": "ctime", "type": "BIGINT_TYPE", "description": "Creation time"}
      {"name": "hard_links", "type": "INTEGER_TYPE", "description": "Number of hard links"}
      {"name": "type", "type": "TEXT_TYPE", "description": "File status"}
    ]
  },
  {
    "name": "device_hash",
    "description": "Similar to the hash table, but use TSK and allow block address access.",
    "columns": [
      {"name": "device", "type": "TEXT_TYPE", "description": "Absolute file path to device node"}
      {"name": "partition", "type": "TEXT_TYPE", "description": "A partition number"}
      {"name": "inode", "type": "BIGINT_TYPE", "description": "Filesystem inode number"}
      {"name": "md5", "type": "TEXT_TYPE", "description": "MD5 hash of provided inode data"}
      {"name": "sha1", "type": "TEXT_TYPE", "description": "SHA1 hash of provided inode data"}
      {"name": "sha256", "type": "TEXT_TYPE", "description": "SHA256 hash of provided inode data"}
    ]
  },
  {
    "name": "device_partitions",
    "description": "Use TSK to enumerate details about partitions on a disk device.",
    "columns": [
      {"name": "device", "type": "TEXT_TYPE", "description": "Absolute file path to device node"}
      {"name": "partition", "type": "INTEGER_TYPE", "description": "A partition number or description"}
      {"name": "label", "type": "TEXT_TYPE", "description": ""}
      {"name": "type", "type": "TEXT_TYPE", "description": ""}
      {"name": "offset", "type": "BIGINT_TYPE", "description": ""}
      {"name": "blocks_size", "type": "BIGINT_TYPE", "description": "Byte size of each block"}
      {"name": "blocks", "type": "BIGINT_TYPE", "description": "Number of blocks"}
      {"name": "inodes", "type": "BIGINT_TYPE", "description": "Number of meta nodes"}
      {"name": "flags", "type": "INTEGER_TYPE", "description": ""}
    ]
  },
  {
    "name": "disk_encryption",
    "description": "Disk Encryption",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "Disk name"}
      {"name": "uuid", "type": "TEXT_TYPE", "description": "Disk Universally Unique Identifier"}
      {"name": "encrypted", "type": "INTEGER_TYPE", "description": "1 If encrypted: true (disk is encrypted), else 0"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Description of cipher type and mode if available"}
    ]
  },
  {
    "name": "etc_hosts",
    "description": "Line-parsed /etc/hosts.",
    "columns": [
      {"name": "address", "type": "TEXT_TYPE", "description": "IP address mapping"}
      {"name": "hostnames", "type": "TEXT_TYPE", "description": "Raw hosts mapping"}
    ]
  },
  {
    "name": "etc_protocols",
    "description": "Line-parsed /etc/protocols.",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "Protocol name"}
      {"name": "number", "type": "INTEGER_TYPE", "description": "Protocol number"}
      {"name": "alias", "type": "TEXT_TYPE", "description": "Protocol alias"}
      {"name": "comment", "type": "TEXT_TYPE", "description": "Comment with protocol description"}
    ]
  },
  {
    "name": "etc_services",
    "description": "Line-parsed /etc/services.",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "Service name"}
      {"name": "port", "type": "INTEGER_TYPE", "description": "Service port number"}
      {"name": "protocol", "type": "TEXT_TYPE", "description": "Transport protocol (TCP/UDP)"}
      {"name": "aliases", "type": "TEXT_TYPE", "description": "Optional space separated list of other names for a service"}
      {"name": "comment", "type": "TEXT_TYPE", "description": "Optional comment for a service."}
    ]
  },
  {
    "name": "file_events",
    "description": "Track time/action changes to files specified in configuration data.",
    "columns": [
      {"name": "target_path", "type": "TEXT_TYPE", "description": "The path associated with the event"}
      {"name": "category", "type": "TEXT_TYPE", "description": "The category of the file defined in the config"}
      {"name": "action", "type": "TEXT_TYPE", "description": "Change action (UPDATE, REMOVE, etc)"}
      {"name": "transaction_id", "type": "BIGINT_TYPE", "description": "ID used during bulk update"}
      {"name": "inode", "type": "BIGINT_TYPE", "description": "Filesystem inode number"}
      {"name": "uid", "type": "BIGINT_TYPE", "description": "Owning user ID"}
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Owning group ID"}
      {"name": "mode", "type": "TEXT_TYPE", "description": "Permission bits"}
      {"name": "size", "type": "BIGINT_TYPE", "description": "Size of file in bytes"}
      {"name": "atime", "type": "BIGINT_TYPE", "description": "Last access time"}
      {"name": "mtime", "type": "BIGINT_TYPE", "description": "Last modification time"}
      {"name": "ctime", "type": "BIGINT_TYPE", "description": "Last status change time"}
      {"name": "md5", "type": "TEXT_TYPE", "description": "The MD5 of the file after change"}
      {"name": "sha1", "type": "TEXT_TYPE", "description": "The SHA1 of the file after change"}
      {"name": "sha256", "type": "TEXT_TYPE", "description": "The SHA256 of the file after change"}
      {"name": "hashed", "type": "INTEGER_TYPE", "description": "1 if the file was hashed, 0 if not, -1 if hashing failed"}
      {"name": "time", "type": "BIGINT_TYPE", "description": "Time of file event"}
    ]
  },
  {
    "name": "firefox_addons",
    "description": "Firefox browser extensions, webapps, and addons.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "The local user that owns the addon"}
      {"name": "name", "type": "TEXT_TYPE", "description": "Addon display name"}
      {"name": "identifier", "type": "TEXT_TYPE", "description": "Addon identifier"}
      {"name": "creator", "type": "TEXT_TYPE", "description": "Addon-supported creator string"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Extension, addon, webapp"}
      {"name": "version", "type": "TEXT_TYPE", "description": "Addon-supplied version string"}
      {"name": "description", "type": "TEXT_TYPE", "description": "Addon-supplied description string"}
      {"name": "source_url", "type": "TEXT_TYPE", "description": "URL that installed the addon"}
      {"name": "visible", "type": "INTEGER_TYPE", "description": "1 If the addon is shown in browser else 0"}
      {"name": "active", "type": "INTEGER_TYPE", "description": "1 If the addon is active else 0"}
      {"name": "disabled", "type": "INTEGER_TYPE", "description": "1 If the addon is application-disabled else 0"}
      {"name": "autoupdate", "type": "INTEGER_TYPE", "description": "1 If the addon applies background updates else 0"}
      {"name": "native", "type": "INTEGER_TYPE", "description": "1 If the addon includes binary components else 0"}
      {"name": "location", "type": "TEXT_TYPE", "description": "Global, profile location"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Path to plugin bundle"}
    ]
  },
  {
    "name": "groups",
    "description": "Local system groups.",
    "columns": [
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Unsigned int64 group ID"}
      {"name": "gid_signed", "type": "BIGINT_TYPE", "description": "A signed int64 version of gid"}
      {"name": "groupname", "type": "TEXT_TYPE", "description": "Canonical local group name"}
    ]
  },
  {
    "name": "hardware_events",
    "description": "Hardware (PCI/USB/HID) events from UDEV or IOKit.",
    "columns": [
      {"name": "action", "type": "TEXT_TYPE", "description": "Remove, insert, change properties, etc"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Local device path assigned (optional)"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Type of hardware and hardware event"}
      {"name": "driver", "type": "TEXT_TYPE", "description": "Driver claiming the device"}
      {"name": "vendor", "type": "TEXT_TYPE", "description": "Hardware device vendor"}
      {"name": "vendor_id", "type": "TEXT_TYPE", "description": "Hex encoded Hardware vendor identifier"}
      {"name": "model", "type": "TEXT_TYPE", "description": "Hardware device model"}
      {"name": "model_id", "type": "TEXT_TYPE", "description": "Hex encoded Hardware model identifier"}
      {"name": "serial", "type": "TEXT_TYPE", "description": "Device serial (optional)"}
      {"name": "revision", "type": "TEXT_TYPE", "description": "Device revision (optional)"}
      {"name": "time", "type": "BIGINT_TYPE", "description": "Time of hardware event"}
    ]
  },
  {
    "name": "interface_addresses",
    "description": "Network interfaces and relevant metadata.",
    "columns": [
      {"name": "interface", "type": "TEXT_TYPE", "description": "Interface name"}
      {"name": "address", "type": "TEXT_TYPE", "description": "Specific address for interface"}
      {"name": "mask", "type": "TEXT_TYPE", "description": "Interface netmask"}
      {"name": "broadcast", "type": "TEXT_TYPE", "description": "Broadcast address for the interface"}
      {"name": "point_to_point", "type": "TEXT_TYPE", "description": "PtP address for the interface"}
    ]
  },
  {
    "name": "interface_details",
    "description": "Detailed information and stats of network interfaces.",
    "columns": [
      {"name": "interface", "type": "TEXT_TYPE", "description": "Interface name"}
      {"name": "mac", "type": "TEXT_TYPE", "description": "MAC of interface (optional)"}
      {"name": "type", "type": "INTEGER_TYPE", "description": "Interface type (includes virtual)"}
      {"name": "mtu", "type": "INTEGER_TYPE", "description": "Network MTU"}
      {"name": "metric", "type": "INTEGER_TYPE", "description": "Metric based on the speed of the interface"}
      {"name": "ipackets", "type": "BIGINT_TYPE", "description": "Input packets"}
      {"name": "opackets", "type": "BIGINT_TYPE", "description": "Output packets"}
      {"name": "ibytes", "type": "BIGINT_TYPE", "description": "Input bytes"}
      {"name": "obytes", "type": "BIGINT_TYPE", "description": "Output bytes"}
      {"name": "ierrors", "type": "BIGINT_TYPE", "description": "Input errors"}
      {"name": "oerrors", "type": "BIGINT_TYPE", "description": "Output errors"}
      {"name": "last_change", "type": "BIGINT_TYPE", "description": "Time of last device modification (optional)"}
    ]
  },
  {
    "name": "kernel_info",
    "description": "Basic active kernel information.",
    "columns": [
      {"name": "version", "type": "TEXT_TYPE", "description": "Kernel version"}
      {"name": "arguments", "type": "TEXT_TYPE", "description": "Kernel arguments"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Kernel path"}
      {"name": "device", "type": "TEXT_TYPE", "description": "Kernel device identifier"}
    ]
  },
  {
    "name": "known_hosts",
    "description": "A line-delimited known_hosts table.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "The local user that owns the known_hosts file"}
      {"name": "key", "type": "TEXT_TYPE", "description": "parsed authorized keys line"}
      {"name": "key_file", "type": "TEXT_TYPE", "description": "Path to known_hosts file"}
    ]
  },
  {
    "name": "last",
    "description": "System logins and logouts.",
    "columns": [
      {"name": "username", "type": "TEXT_TYPE", "description": "Entry username"}
      {"name": "tty", "type": "TEXT_TYPE", "description": "Entry terminal"}
      {"name": "pid", "type": "INTEGER_TYPE", "description": "Process (or thread) ID"}
      {"name": "type", "type": "INTEGER_TYPE", "description": "Entry type, according to ut_type types (utmp.h)"}
      {"name": "time", "type": "INTEGER_TYPE", "description": "Entry timestamp"}
      {"name": "host", "type": "TEXT_TYPE", "description": "Entry hostname"}
    ]
  },
  {
    "name": "listening_ports",
    "description": "Processes with listening (bound) network sockets/ports.",
    "columns": [
      {"name": "pid", "type": "INTEGER_TYPE", "description": "Process (or thread) ID"}
      {"name": "port", "type": "INTEGER_TYPE", "description": "Transport layer port"}
      {"name": "protocol", "type": "INTEGER_TYPE", "description": "Transport protocol (TCP/UDP)"}
      {"name": "family", "type": "INTEGER_TYPE", "description": "Network protocol (IPv4, IPv6)"}
      {"name": "address", "type": "TEXT_TYPE", "description": "Specific address for bind"}
    ]
  },
  {
    "name": "logged_in_users",
    "description": "Users with an active shell on the system.",
    "columns": [
      {"name": "user", "type": "TEXT_TYPE", "description": "User login name"}
      {"name": "tty", "type": "TEXT_TYPE", "description": "Device name"}
      {"name": "host", "type": "TEXT_TYPE", "description": "Remote hostname"}
      {"name": "time", "type": "INTEGER_TYPE", "description": "Time entry was made"}
      {"name": "pid", "type": "INTEGER_TYPE", "description": "Process (or thread) ID"}
    ]
  },
  {
    "name": "magic",
    "description": "Magic number recognition library table.",
    "columns": [
      {"name": "path", "type": "TEXT_TYPE", "description": "Absolute path to target file"}
      {"name": "data", "type": "TEXT_TYPE", "description": "Magic number data from libmagic"}
      {"name": "mime_type", "type": "TEXT_TYPE", "description": "MIME type data from libmagic"}
      {"name": "mime_encoding", "type": "TEXT_TYPE", "description": "MIME encoding data from libmagic"}
    ]
  },
  {
    "name": "mounts",
    "description": "System mounted devices and filesystems (not process specific).",
    "columns": [
      {"name": "device", "type": "TEXT_TYPE", "description": "Mounted device"}
      {"name": "device_alias", "type": "TEXT_TYPE", "description": "Mounted device alias"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Mounted device path"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Mounted device type"}
      {"name": "blocks_size", "type": "BIGINT_TYPE", "description": "Block size in bytes"}
      {"name": "blocks", "type": "BIGINT_TYPE", "description": "Mounted device used blocks"}
      {"name": "blocks_free", "type": "BIGINT_TYPE", "description": "Mounted device free blocks"}
      {"name": "blocks_available", "type": "BIGINT_TYPE", "description": "Mounted device available blocks"}
      {"name": "inodes", "type": "BIGINT_TYPE", "description": "Mounted device used inodes"}
      {"name": "inodes_free", "type": "BIGINT_TYPE", "description": "Mounted device free inodes"}
      {"name": "flags", "type": "TEXT_TYPE", "description": "Mounted device flags"}
    ]
  },
  {
    "name": "opera_extensions",
    "description": "Opera browser extensions.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "The local user that owns the extension"}
      {"name": "name", "type": "TEXT_TYPE", "description": "Extension display name"}
      {"name": "identifier", "type": "TEXT_TYPE", "description": "Extension identifier"}
      {"name": "version", "type": "TEXT_TYPE", "description": "Extension-supplied version"}
      {"name": "description", "type": "TEXT_TYPE", "description": "Extension-optional description"}
      {"name": "locale", "type": "TEXT_TYPE", "description": "Default locale supported by extension"}
      {"name": "update_url", "type": "TEXT_TYPE", "description": "Extension-supplied update URI"}
      {"name": "author", "type": "TEXT_TYPE", "description": "Optional extension author"}
      {"name": "persistent", "type": "INTEGER_TYPE", "description": "1 If extension is persistent across all tabs else 0"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Path to extension folder"}
    ]
  },
  {
    "name": "os_version",
    "description": "A single row containing the operating system name and version.",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "Distribution or product name"}
      {"name": "major", "type": "INTEGER_TYPE", "description": "Major release version"}
      {"name": "minor", "type": "INTEGER_TYPE", "description": "Minor release version"}
      {"name": "patch", "type": "INTEGER_TYPE", "description": "Optional patch release"}
      {"name": "build", "type": "TEXT_TYPE", "description": "Optional build-specific or variant string"}
    ]
  },
  {
    "name": "pci_devices",
    "description": "PCI devices active on the host system.",
    "columns": [
      {"name": "pci_slot", "type": "TEXT_TYPE", "description": "PCI Device used slot"}
      {"name": "pci_class", "type": "TEXT_TYPE", "description": "PCI Device class"}
      {"name": "driver", "type": "TEXT_TYPE", "description": "PCI Device used driver"}
      {"name": "vendor", "type": "TEXT_TYPE", "description": "PCI Device vendor"}
      {"name": "vendor_id", "type": "TEXT_TYPE", "description": "Hex encoded PCI Device vendor identifier"}
      {"name": "model", "type": "TEXT_TYPE", "description": "PCI Device model"}
      {"name": "model_id", "type": "TEXT_TYPE", "description": "Hex encoded PCI Device model identifier"}
    ]
  },
  {
    "name": "platform_info",
    "description": "Information about EFI/UEFI/ROM and platform/boot.",
    "columns": [
      {"name": "vendor", "type": "TEXT_TYPE", "description": "Platform code vendor"}
      {"name": "version", "type": "TEXT_TYPE", "description": "Platform code version"}
      {"name": "date", "type": "TEXT_TYPE", "description": "Self-reported platform code update date"}
      {"name": "revision", "type": "TEXT_TYPE", "description": "BIOS major and minor revision"}
      {"name": "address", "type": "TEXT_TYPE", "description": "Relative address of firmware mapping"}
      {"name": "size", "type": "TEXT_TYPE", "description": "Size in bytes of firmware"}
      {"name": "volume_size", "type": "INTEGER_TYPE", "description": "(Optional) size of firmware volume"}
      {"name": "extra", "type": "TEXT_TYPE", "description": "Platform-specific additional information"}
    ]
  },
  {
    "name": "process_envs",
    "description": "A key/value table of environment variables for each process.",
    "columns": [
      {"name": "pid", "type": "INTEGER_TYPE", "description": "Process (or thread) ID"}
      {"name": "key", "type": "TEXT_TYPE", "description": "Environment variable name"}
      {"name": "value", "type": "TEXT_TYPE", "description": "Environment variable value"}
    ]
  },
  {
    "name": "process_events",
    "description": "Track time/action process executions.",
    "columns": [
      {"name": "pid", "type": "BIGINT_TYPE", "description": "Process (or thread) ID"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Path of executed file"}
      {"name": "mode", "type": "BIGINT_TYPE", "description": "File mode permissions"}
      {"name": "cmdline", "type": "TEXT_TYPE", "description": "Command line arguments (argv)"}
      {"name": "cmdline_size", "type": "BIGINT_TYPE", "description": "Actual size (bytes) of command line arguments"}
      {"name": "environment", "type": "TEXT_TYPE", "description": "Environment variables delimited by spaces"}
      {"name": "environment_count", "type": "BIGINT_TYPE", "description": "Number of environment variables"}
      {"name": "environment_size", "type": "BIGINT_TYPE", "description": "Actual size (bytes) of environment list"}
      {"name": "uid", "type": "BIGINT_TYPE", "description": "User ID at process start"}
      {"name": "euid", "type": "BIGINT_TYPE", "description": "Effective user ID at process start"}
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Group ID at process start"}
      {"name": "egid", "type": "BIGINT_TYPE", "description": "Effective group ID at process start"}
      {"name": "owner_uid", "type": "BIGINT_TYPE", "description": "File owner user ID"}
      {"name": "owner_gid", "type": "BIGINT_TYPE", "description": "File owner group ID"}
      {"name": "create_time", "type": "BIGINT_TYPE", "description": "File creation in UNIX time"}
      {"name": "access_time", "type": "BIGINT_TYPE", "description": "File last access in UNIX time"}
      {"name": "modify_time", "type": "BIGINT_TYPE", "description": "File modification in UNIX time"}
      {"name": "change_time", "type": "BIGINT_TYPE", "description": "File last metadata change in UNIX time"}
      {"name": "overflows", "type": "TEXT_TYPE", "description": "List of structures that overflowed"}
      {"name": "parent", "type": "BIGINT_TYPE", "description": "Process parent's PID"}
      {"name": "time", "type": "BIGINT_TYPE", "description": "Time of execution in UNIX time"}
      {"name": "uptime", "type": "BIGINT_TYPE", "description": "Time of execution in system uptime"}
    ]
  },
  {
    "name": "process_memory_map",
    "description": "Process memory mapped files and pseudo device/regions.",
    "columns": [
      {"name": "pid", "type": "INTEGER_TYPE", "description": "Process (or thread) ID"}
      {"name": "start", "type": "TEXT_TYPE", "description": "Virtual start address (hex)"}
      {"name": "end", "type": "TEXT_TYPE", "description": "Virtual end address (hex)"}
      {"name": "permissions", "type": "TEXT_TYPE", "description": "r=read, w=write, x=execute, p=private (cow)"}
      {"name": "offset", "type": "BIGINT_TYPE", "description": "Offset into mapped path"}
      {"name": "device", "type": "TEXT_TYPE", "description": "MA:MI Major/minor device ID"}
      {"name": "inode", "type": "INTEGER_TYPE", "description": "Mapped path inode, 0 means uninitialized (BSS)"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Path to mapped file or mapped type"}
      {"name": "pseudo", "type": "INTEGER_TYPE", "description": "1 If path is a pseudo path, else 0"}
    ]
  },
  {
    "name": "process_open_files",
    "description": "File descriptors for each process.",
    "columns": [
      {"name": "pid", "type": "BIGINT_TYPE", "description": "Process (or thread) ID"}
      {"name": "fd", "type": "BIGINT_TYPE", "description": "Process-specific file descriptor number"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Filesystem path of descriptor"}
    ]
  },
  {
    "name": "process_open_sockets",
    "description": "Processes which have open network sockets on the system.",
    "columns": [
      {"name": "pid", "type": "INTEGER_TYPE", "description": "Process (or thread) ID"}
      {"name": "fd", "type": "BIGINT_TYPE", "description": "Socket file descriptor number"}
      {"name": "socket", "type": "BIGINT_TYPE", "description": "Socket handle or inode number"}
      {"name": "family", "type": "INTEGER_TYPE", "description": "Network protocol (IPv4, IPv6)"}
      {"name": "protocol", "type": "INTEGER_TYPE", "description": "Transport protocol (TCP/UDP)"}
      {"name": "local_address", "type": "TEXT_TYPE", "description": "Socket local address"}
      {"name": "remote_address", "type": "TEXT_TYPE", "description": "Socket remote address"}
      {"name": "local_port", "type": "INTEGER_TYPE", "description": "Socket local port"}
      {"name": "remote_port", "type": "INTEGER_TYPE", "description": "Socket remote port"}
      {"name": "path", "type": "TEXT_TYPE", "description": "For UNIX sockets (family=AF_UNIX), the domain path"}
    ]
  },
  {
    "name": "processes",
    "description": "All running processes on the host system.",
    "columns": [
      {"name": "pid", "type": "BIGINT_TYPE", "description": "Process (or thread) ID"}
      {"name": "name", "type": "TEXT_TYPE", "description": "The process path or shorthand argv[0]"}
      {"name": "path", "type": "TEXT_TYPE", "description": "Path to executed binary"}
      {"name": "cmdline", "type": "TEXT_TYPE", "description": "Complete argv"}
      {"name": "state", "type": "TEXT_TYPE", "description": "Process state"}
      {"name": "cwd", "type": "TEXT_TYPE", "description": "Process current working directory"}
      {"name": "root", "type": "TEXT_TYPE", "description": "Process virtual root directory"}
      {"name": "uid", "type": "BIGINT_TYPE", "description": "Unsigned user ID"}
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Unsigned group ID"}
      {"name": "euid", "type": "BIGINT_TYPE", "description": "Unsigned effective user ID"}
      {"name": "egid", "type": "BIGINT_TYPE", "description": "Unsigned effective group ID"}
      {"name": "suid", "type": "BIGINT_TYPE", "description": "Unsigned saved user ID"}
      {"name": "sgid", "type": "BIGINT_TYPE", "description": "Unsigned saved group ID"}
      {"name": "on_disk", "type": "INTEGER_TYPE", "description": "The process path exists yes=1, no=0, unknown=-1"}
      {"name": "wired_size", "type": "BIGINT_TYPE", "description": "Bytes of unpagable memory used by process"}
      {"name": "resident_size", "type": "BIGINT_TYPE", "description": "Bytes of private memory used by process"}
      {"name": "phys_footprint", "type": "BIGINT_TYPE", "description": "Bytes of total physical memory used"}
      {"name": "user_time", "type": "BIGINT_TYPE", "description": "CPU time spent in user space"}
      {"name": "system_time", "type": "BIGINT_TYPE", "description": "CPU time spent in kernel space"}
      {"name": "start_time", "type": "BIGINT_TYPE", "description": "Process start in seconds since boot (non-sleeping)"}
      {"name": "parent", "type": "BIGINT_TYPE", "description": "Process parent's PID"}
      {"name": "group", "type": "BIGINT_TYPE", "description": "Process group"}
      {"name": "nice", "type": "INTEGER_TYPE", "description": "Process nice level (-20 to 20, default 0)"}
    ]
  },
  {
    "name": "routes",
    "description": "The active route table for the host system.",
    "columns": [
      {"name": "destination", "type": "TEXT_TYPE", "description": "Destination IP address"}
      {"name": "netmask", "type": "TEXT_TYPE", "description": "Netmask length"}
      {"name": "gateway", "type": "TEXT_TYPE", "description": "Route gateway"}
      {"name": "source", "type": "TEXT_TYPE", "description": "Route source"}
      {"name": "flags", "type": "INTEGER_TYPE", "description": "Flags to describe route"}
      {"name": "interface", "type": "TEXT_TYPE", "description": "Route local interface"}
      {"name": "mtu", "type": "INTEGER_TYPE", "description": "Maximum Transmission Unit for the route"}
      {"name": "metric", "type": "INTEGER_TYPE", "description": "Cost of route. Lowest is preferred"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Type of route"}
    ]
  },
  {
    "name": "shell_history",
    "description": "A line-delimited (command) table of per-user .*_history data.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "Shell history owner"}
      {"name": "command", "type": "TEXT_TYPE", "description": "Unparsed date/line/command history line"}
      {"name": "history_file", "type": "TEXT_TYPE", "description": "Path to the .*_history for this user"}
    ]
  },
  {
    "name": "smbios_tables",
    "description": "BIOS (DMI) structure common details and content.",
    "columns": [
      {"name": "number", "type": "INTEGER_TYPE", "description": "Table entry number"}
      {"name": "type", "type": "INTEGER_TYPE", "description": "Table entry type"}
      {"name": "description", "type": "TEXT_TYPE", "description": "Table entry description"}
      {"name": "handle", "type": "INTEGER_TYPE", "description": "Table entry handle"}
      {"name": "header_size", "type": "INTEGER_TYPE", "description": "Header size in bytes"}
      {"name": "size", "type": "INTEGER_TYPE", "description": "Table entry size in bytes"}
      {"name": "md5", "type": "TEXT_TYPE", "description": "MD5 hash of table entry"}
    ]
  },
  {
    "name": "suid_bin",
    "description": "suid binaries in common locations.",
    "columns": [
      {"name": "path", "type": "TEXT_TYPE", "description": "Binary path"}
      {"name": "username", "type": "TEXT_TYPE", "description": "Binary owner username"}
      {"name": "groupname", "type": "TEXT_TYPE", "description": "Binary owner group"}
      {"name": "permissions", "type": "TEXT_TYPE", "description": "Binary permissions"}
    ]
  },
  {
    "name": "system_controls",
    "description": "sysctl names, values, and settings information.",
    "columns": [
      {"name": "name", "type": "TEXT_TYPE", "description": "Full sysctl MIB name"}
      {"name": "oid", "type": "TEXT_TYPE", "description": "Control MIB"}
      {"name": "subsystem", "type": "TEXT_TYPE", "description": "Subsystem ID, control type"}
      {"name": "current_value", "type": "TEXT_TYPE", "description": "Value of setting"}
      {"name": "config_value", "type": "TEXT_TYPE", "description": "The MIB value set in /etc/sysctl.conf"}
      {"name": "type", "type": "TEXT_TYPE", "description": "Data type"}
    ]
  },
  {
    "name": "system_info",
    "description": "System information for identification.",
    "columns": [
      {"name": "hostname", "type": "TEXT_TYPE", "description": "Network hostname including domain"}
      {"name": "uuid", "type": "TEXT_TYPE", "description": "Unique ID provided by the system"}
      {"name": "cpu_type", "type": "TEXT_TYPE", "description": "CPU type"}
      {"name": "cpu_subtype", "type": "TEXT_TYPE", "description": "CPU subtype"}
      {"name": "cpu_brand", "type": "TEXT_TYPE", "description": "CPU brand string"}
      {"name": "cpu_physical_cores", "type": "INTEGER_TYPE", "description": "Max number of CPU physical cores"}
      {"name": "cpu_logical_cores", "type": "INTEGER_TYPE", "description": "Max number of CPU logical cores"}
      {"name": "physical_memory", "type": "BIGINT_TYPE", "description": "Total physical memory in bytes"}
      {"name": "hardware_model", "type": "TEXT_TYPE", "description": "Hardware model string"}
      {"name": "hardware_serial", "type": "TEXT_TYPE", "description": "System serial number frequently used for asset tracking"}
      {"name": "computer_name", "type": "TEXT_TYPE", "description": "Friendly computer name (optional)"}
    ]
  },
  {
    "name": "uptime",
    "description": "Track time passed since last boot.",
    "columns": [
      {"name": "days", "type": "INTEGER_TYPE", "description": "Days of uptime"}
      {"name": "hours", "type": "INTEGER_TYPE", "description": "Hours of uptime"}
      {"name": "minutes", "type": "INTEGER_TYPE", "description": "Minutes of uptime"}
      {"name": "seconds", "type": "INTEGER_TYPE", "description": "Seconds of uptime"}
      {"name": "total_seconds", "type": "BIGINT_TYPE", "description": "Total uptime seconds"}
    ]
  },
  {
    "name": "usb_devices",
    "description": "USB devices that are actively plugged into the host system.",
    "columns": [
      {"name": "usb_address", "type": "INTEGER_TYPE", "description": "USB Device used address"}
      {"name": "usb_port", "type": "INTEGER_TYPE", "description": "USB Device used port"}
      {"name": "vendor", "type": "TEXT_TYPE", "description": "USB Device vendor string"}
      {"name": "vendor_id", "type": "TEXT_TYPE", "description": "Hex encoded USB Device vendor identifier"}
      {"name": "model", "type": "TEXT_TYPE", "description": "USB Device model string"}
      {"name": "model_id", "type": "TEXT_TYPE", "description": "Hex encoded USB Device model identifier"}
      {"name": "serial", "type": "TEXT_TYPE", "description": "USB Device serial connection"}
      {"name": "removable", "type": "INTEGER_TYPE", "description": "1 If USB device is removable else 0"}
    ]
  },
  {
    "name": "user_groups",
    "description": "Local system user group relationships.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "User ID"}
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Group ID"}
    ]
  },
  {
    "name": "users",
    "description": "Local system users.",
    "columns": [
      {"name": "uid", "type": "BIGINT_TYPE", "description": "User ID"}
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Group ID (unsigned)"}
      {"name": "uid_signed", "type": "BIGINT_TYPE", "description": "User ID as int64 signed (Apple)"}
      {"name": "gid_signed", "type": "BIGINT_TYPE", "description": "Default group ID as int64 signed (Apple)"}
      {"name": "username", "type": "TEXT_TYPE", "description": "Username"}
      {"name": "description", "type": "TEXT_TYPE", "description": "Optional user description"}
      {"name": "directory", "type": "TEXT_TYPE", "description": "User's home directory"}
      {"name": "shell", "type": "TEXT_TYPE", "description": "User's configured default shell"}
    ]
  },
  {
    "name": "yara",
    "description": "Track YARA matches for files or PIDs.",
    "columns": [
      {"name": "path", "type": "TEXT_TYPE", "description": "The path scanned"}
      {"name": "matches", "type": "TEXT_TYPE", "description": "List of YARA matches"}
      {"name": "count", "type": "INTEGER_TYPE", "description": "Number of YARA matches"}
      {"name": "sig_group", "type": "TEXT_TYPE", "description": "Signature group used"}
      {"name": "sigfile", "type": "TEXT_TYPE", "description": "Signature file used"}
      {"name": "pattern", "type": "TEXT_TYPE", "description": "A pattern which can be used to match file paths"}
      {"name": "strings", "type": "TEXT_TYPE", "description": "Matching strings"}
      {"name": "tags", "type": "TEXT_TYPE", "description": "Matching tags"}
    ]
  },
  {
    "name": "yara_events",
    "description": "Track YARA matches for files specified in configuration data.",
    "columns": [
      {"name": "target_path", "type": "TEXT_TYPE", "description": "The path scanned"}
      {"name": "category", "type": "TEXT_TYPE", "description": "The category of the file"}
      {"name": "action", "type": "TEXT_TYPE", "description": "Change action (UPDATE, REMOVE, etc)"}
      {"name": "transaction_id", "type": "BIGINT_TYPE", "description": "ID used during bulk update"}
      {"name": "matches", "type": "TEXT_TYPE", "description": "List of YARA matches"}
      {"name": "count", "type": "INTEGER_TYPE", "description": "Number of YARA matches"}
      {"name": "time", "type": "BIGINT_TYPE", "description": "Time of the scan"}
      {"name": "strings", "type": "TEXT_TYPE", "description": "Matching strings"}
      {"name": "tags", "type": "TEXT_TYPE", "description": "Matching tags"}
    ]
  },
  {
    "name": "file",
    "description": "Interactive filesystem attributes and metadata.",
    "columns": [
      {"name": "path", "type": "TEXT_TYPE", "description": "Absolute file path"},
      {"name": "directory", "type": "TEXT_TYPE", "description": "Directory of file(s)"},
      {"name": "filename", "type": "TEXT_TYPE", "description": "Name portion of file path"},
      {"name": "inode", "type": "BIGINT_TYPE", "description": "Filesystem inode number"},
      {"name": "uid", "type": "BIGINT_TYPE", "description": "Owning user ID"},
      {"name": "gid", "type": "BIGINT_TYPE", "description": "Owning group ID"},
      {"name": "mode", "type": "TEXT_TYPE", "description": "Permission bits"},
      {"name": "device", "type": "BIGINT_TYPE", "description": "Device ID (optional)"},
      {"name": "size", "type": "BIGINT_TYPE", "description": "Size of file in bytes"},
      {"name": "block_size", "type": "INTEGER_TYPE", "description": " Block size of filesystem"},
      {"name": "atime", "type": "BIGINT_TYPE", "description": "Last access time"},
      {"name": "mtime", "type": "BIGINT_TYPE", "description": "Last modification time"},
      {"name": "ctime", "type": "BIGINT_TYPE", "description": "Last status change time"},
      {"name": "btime", "type": "BIGINT_TYPE", "description": "(B)irth or (cr)eate time"},
      {"name": "hard_links", "type": "INTEGER_TYPE", "description": "Number of hard links"},
      {"name": "type", "type": "TEXT_TYPE", "description": "File status"}
    ]
  }
];
