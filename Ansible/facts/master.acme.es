{"ansible_facts": {"ansible_all_ipv4_addresses": ["192.168.0.215"], "ansible_all_ipv6_addresses": ["fe80::a00:27ff:fe42:243"], "ansible_apparmor": {"status": "disabled"}, "ansible_architecture": "x86_64", "ansible_bios_date": "12/01/2006", "ansible_bios_vendor": "innotek GmbH", "ansible_bios_version": "VirtualBox", "ansible_board_asset_tag": "NA", "ansible_board_name": "VirtualBox", "ansible_board_serial": "NA", "ansible_board_vendor": "Oracle Corporation", "ansible_board_version": "1.2", "ansible_chassis_asset_tag": "NA", "ansible_chassis_serial": "NA", "ansible_chassis_vendor": "Oracle Corporation", "ansible_chassis_version": "NA", "ansible_cmdline": {"BOOT_IMAGE": "(hd0,msdos1)/vmlinuz-4.18.0-365.el8.x86_64", "crashkernel": "auto", "quiet": true, "rd.lvm.lv": "cs/swap", "resume": "/dev/mapper/cs-swap", "rhgb": true, "ro": true, "root": "/dev/mapper/cs-root"}, "ansible_date_time": {"date": "2022-02-24", "day": "24", "epoch": "1645737349", "epoch_int": "1645737349", "hour": "16", "iso8601": "2022-02-24T21:15:49Z", "iso8601_basic": "20220224T161549249417", "iso8601_basic_short": "20220224T161549", "iso8601_micro": "2022-02-24T21:15:49.249417Z", "minute": "15", "month": "02", "second": "49", "time": "16:15:49", "tz": "EST", "tz_dst": "EDT", "tz_offset": "-0500", "weekday": "Thursday", "weekday_number": "4", "weeknumber": "08", "year": "2022"}, "ansible_default_ipv4": {"address": "192.168.0.215", "alias": "enp0s3", "broadcast": "192.168.0.255", "gateway": "192.168.0.1", "interface": "enp0s3", "macaddress": "08:00:27:42:02:43", "mtu": 1500, "netmask": "255.255.255.0", "network": "192.168.0.0", "type": "ether"}, "ansible_default_ipv6": {}, "ansible_device_links": {"ids": {"dm-0": ["dm-name-cs-root", "dm-uuid-LVM-Zp0gqYyMPrRTQK0hyUX1SZtXn7LO06MK5RTiG6ZZTsdMvdwfvAygvN59nh8NanTu"], "dm-1": ["dm-name-cs-swap", "dm-uuid-LVM-Zp0gqYyMPrRTQK0hyUX1SZtXn7LO06MKIKhcNyhDyC2TaNSciJilsg0iFx9K6EfB"], "sda": ["ata-VBOX_HARDDISK_VB0fd297b7-6efc9a5a", "scsi-0ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a", "scsi-1ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a", "scsi-SATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a"], "sda1": ["ata-VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1", "scsi-0ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1", "scsi-1ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1", "scsi-SATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1"], "sda2": ["ata-VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2", "lvm-pv-uuid-maSAeL-QDiC-98jv-8aQj-cKe0-KZlg-0cTyRz", "scsi-0ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2", "scsi-1ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2", "scsi-SATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2"], "sr0": ["ata-VBOX_CD-ROM_VB2-01700376"]}, "labels": {}, "masters": {"sda2": ["dm-0", "dm-1"]}, "uuids": {"dm-0": ["32525ff3-0089-43d4-8935-7c0a9c1c573a"], "dm-1": ["d84f72bf-0434-4e84-a337-a6797f1ad9bf"], "sda1": ["1a7144fb-e7de-46b0-8eeb-0b8275729669"]}}, "ansible_devices": {"dm-0": {"holders": [], "host": "", "links": {"ids": ["dm-name-cs-root", "dm-uuid-LVM-Zp0gqYyMPrRTQK0hyUX1SZtXn7LO06MK5RTiG6ZZTsdMvdwfvAygvN59nh8NanTu"], "labels": [], "masters": [], "uuids": ["32525ff3-0089-43d4-8935-7c0a9c1c573a"]}, "model": null, "partitions": {}, "removable": "0", "rotational": "1", "sas_address": null, "sas_device_handle": null, "scheduler_mode": "", "sectors": "28090368", "sectorsize": "512", "size": "13.39 GB", "support_discard": "0", "vendor": null, "virtual": 1}, "dm-1": {"holders": [], "host": "", "links": {"ids": ["dm-name-cs-swap", "dm-uuid-LVM-Zp0gqYyMPrRTQK0hyUX1SZtXn7LO06MKIKhcNyhDyC2TaNSciJilsg0iFx9K6EfB"], "labels": [], "masters": [], "uuids": ["d84f72bf-0434-4e84-a337-a6797f1ad9bf"]}, "model": null, "partitions": {}, "removable": "0", "rotational": "1", "sas_address": null, "sas_device_handle": null, "scheduler_mode": "", "sectors": "3358720", "sectorsize": "512", "size": "1.60 GB", "support_discard": "0", "vendor": null, "virtual": 1}, "sda": {"holders": [], "host": "SATA controller: Intel Corporation 82801HM/HEM (ICH8M/ICH8M-E) SATA Controller [AHCI mode] (rev 02)", "links": {"ids": ["ata-VBOX_HARDDISK_VB0fd297b7-6efc9a5a", "scsi-0ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a", "scsi-1ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a", "scsi-SATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a"], "labels": [], "masters": [], "uuids": []}, "model": "VBOX HARDDISK", "partitions": {"sda1": {"holders": [], "links": {"ids": ["ata-VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1", "scsi-0ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1", "scsi-1ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1", "scsi-SATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part1"], "labels": [], "masters": [], "uuids": ["1a7144fb-e7de-46b0-8eeb-0b8275729669"]}, "sectors": "2097152", "sectorsize": 512, "size": "1.00 GB", "start": "2048", "uuid": "1a7144fb-e7de-46b0-8eeb-0b8275729669"}, "sda2": {"holders": ["cs-swap", "cs-root"], "links": {"ids": ["ata-VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2", "lvm-pv-uuid-maSAeL-QDiC-98jv-8aQj-cKe0-KZlg-0cTyRz", "scsi-0ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2", "scsi-1ATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2", "scsi-SATA_VBOX_HARDDISK_VB0fd297b7-6efc9a5a-part2"], "labels": [], "masters": ["dm-0", "dm-1"], "uuids": []}, "sectors": "31455232", "sectorsize": 512, "size": "15.00 GB", "start": "2099200", "uuid": null}}, "removable": "0", "rotational": "1", "sas_address": null, "sas_device_handle": null, "scheduler_mode": "mq-deadline", "sectors": "33554432", "sectorsize": "512", "size": "16.00 GB", "support_discard": "0", "vendor": "ATA", "virtual": 1}, "sr0": {"holders": [], "host": "IDE interface: Intel Corporation 82371AB/EB/MB PIIX4 IDE (rev 01)", "links": {"ids": ["ata-VBOX_CD-ROM_VB2-01700376"], "labels": [], "masters": [], "uuids": []}, "model": "CD-ROM", "partitions": {}, "removable": "1", "rotational": "1", "sas_address": null, "sas_device_handle": null, "scheduler_mode": "mq-deadline", "sectors": "2097151", "sectorsize": "512", "size": "1024.00 MB", "support_discard": "0", "vendor": "VBOX", "virtual": 1}}, "ansible_distribution": "CentOS", "ansible_distribution_file_parsed": true, "ansible_distribution_file_path": "/etc/centos-release", "ansible_distribution_file_variety": "CentOS", "ansible_distribution_major_version": "8", "ansible_distribution_release": "Stream", "ansible_distribution_version": "8", "ansible_dns": {"nameservers": ["192.168.0.1"], "search": ["acme.es"]}, "ansible_domain": "acme.es", "ansible_effective_group_id": 1000, "ansible_effective_user_id": 1000, "ansible_enp0s3": {"active": true, "device": "enp0s3", "features": {"esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "fcoe_mtu": "off [fixed]", "generic_receive_offload": "on", "generic_segmentation_offload": "on", "highdma": "off [fixed]", "hw_tc_offload": "off [fixed]", "l2_fwd_offload": "off [fixed]", "large_receive_offload": "off [fixed]", "loopback": "off [fixed]", "netns_local": "off [fixed]", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "rx_all": "off", "rx_checksumming": "off", "rx_fcs": "off", "rx_gro_hw": "off [fixed]", "rx_gro_list": "off", "rx_udp_gro_forwarding": "off", "rx_udp_tunnel_port_offload": "off [fixed]", "rx_vlan_filter": "on [fixed]", "rx_vlan_offload": "on", "rx_vlan_stag_filter": "off [fixed]", "rx_vlan_stag_hw_parse": "off [fixed]", "scatter_gather": "on", "tcp_segmentation_offload": "on", "tls_hw_record": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_ip_generic": "on", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_sctp": "off [fixed]", "tx_checksumming": "on", "tx_esp_segmentation": "off [fixed]", "tx_fcoe_segmentation": "off [fixed]", "tx_gre_csum_segmentation": "off [fixed]", "tx_gre_segmentation": "off [fixed]", "tx_gso_list": "off [fixed]", "tx_gso_partial": "off [fixed]", "tx_gso_robust": "off [fixed]", "tx_ipxip4_segmentation": "off [fixed]", "tx_ipxip6_segmentation": "off [fixed]", "tx_lockless": "off [fixed]", "tx_nocache_copy": "off", "tx_scatter_gather": "on", "tx_scatter_gather_fraglist": "off [fixed]", "tx_sctp_segmentation": "off [fixed]", "tx_tcp6_segmentation": "off [fixed]", "tx_tcp_ecn_segmentation": "off [fixed]", "tx_tcp_mangleid_segmentation": "off", "tx_tcp_segmentation": "on", "tx_tunnel_remcsum_segmentation": "off [fixed]", "tx_udp_segmentation": "off [fixed]", "tx_udp_tnl_csum_segmentation": "off [fixed]", "tx_udp_tnl_segmentation": "off [fixed]", "tx_vlan_offload": "on [fixed]", "tx_vlan_stag_hw_insert": "off [fixed]", "vlan_challenged": "off [fixed]"}, "hw_timestamp_filters": [], "ipv4": {"address": "192.168.0.215", "broadcast": "192.168.0.255", "netmask": "255.255.255.0", "network": "192.168.0.0"}, "ipv6": [{"address": "fe80::a00:27ff:fe42:243", "prefix": "64", "scope": "link"}], "macaddress": "08:00:27:42:02:43", "module": "e1000", "mtu": 1500, "pciid": "0000:00:03.0", "promisc": false, "speed": 1000, "timestamping": [], "type": "ether"}, "ansible_env": {"BASH_FUNC_which%%": "() {  ( alias;\n eval ${which_declare} ) | /usr/bin/which --tty-only --read-alias --read-functions --show-tilde --show-dot $@\n}", "DBUS_SESSION_BUS_ADDRESS": "unix:path=/run/user/1000/bus", "HOME": "/home/aristoteles", "LANG": "C.UTF-8", "LESSOPEN": "||/usr/bin/lesspipe.sh %s", "LOGNAME": "aristoteles", "LS_COLORS": "rs=0:di=38;5;33:ln=38;5;51:mh=00:pi=40;38;5;11:so=38;5;13:do=38;5;5:bd=48;5;232;38;5;11:cd=48;5;232;38;5;3:or=48;5;232;38;5;9:mi=01;05;37;41:su=48;5;196;38;5;15:sg=48;5;11;38;5;16:ca=48;5;196;38;5;226:tw=48;5;10;38;5;16:ow=48;5;10;38;5;21:st=48;5;21;38;5;15:ex=38;5;40:*.tar=38;5;9:*.tgz=38;5;9:*.arc=38;5;9:*.arj=38;5;9:*.taz=38;5;9:*.lha=38;5;9:*.lz4=38;5;9:*.lzh=38;5;9:*.lzma=38;5;9:*.tlz=38;5;9:*.txz=38;5;9:*.tzo=38;5;9:*.t7z=38;5;9:*.zip=38;5;9:*.z=38;5;9:*.dz=38;5;9:*.gz=38;5;9:*.lrz=38;5;9:*.lz=38;5;9:*.lzo=38;5;9:*.xz=38;5;9:*.zst=38;5;9:*.tzst=38;5;9:*.bz2=38;5;9:*.bz=38;5;9:*.tbz=38;5;9:*.tbz2=38;5;9:*.tz=38;5;9:*.deb=38;5;9:*.rpm=38;5;9:*.jar=38;5;9:*.war=38;5;9:*.ear=38;5;9:*.sar=38;5;9:*.rar=38;5;9:*.alz=38;5;9:*.ace=38;5;9:*.zoo=38;5;9:*.cpio=38;5;9:*.7z=38;5;9:*.rz=38;5;9:*.cab=38;5;9:*.wim=38;5;9:*.swm=38;5;9:*.dwm=38;5;9:*.esd=38;5;9:*.jpg=38;5;13:*.jpeg=38;5;13:*.mjpg=38;5;13:*.mjpeg=38;5;13:*.gif=38;5;13:*.bmp=38;5;13:*.pbm=38;5;13:*.pgm=38;5;13:*.ppm=38;5;13:*.tga=38;5;13:*.xbm=38;5;13:*.xpm=38;5;13:*.tif=38;5;13:*.tiff=38;5;13:*.png=38;5;13:*.svg=38;5;13:*.svgz=38;5;13:*.mng=38;5;13:*.pcx=38;5;13:*.mov=38;5;13:*.mpg=38;5;13:*.mpeg=38;5;13:*.m2v=38;5;13:*.mkv=38;5;13:*.webm=38;5;13:*.ogm=38;5;13:*.mp4=38;5;13:*.m4v=38;5;13:*.mp4v=38;5;13:*.vob=38;5;13:*.qt=38;5;13:*.nuv=38;5;13:*.wmv=38;5;13:*.asf=38;5;13:*.rm=38;5;13:*.rmvb=38;5;13:*.flc=38;5;13:*.avi=38;5;13:*.fli=38;5;13:*.flv=38;5;13:*.gl=38;5;13:*.dl=38;5;13:*.xcf=38;5;13:*.xwd=38;5;13:*.yuv=38;5;13:*.cgm=38;5;13:*.emf=38;5;13:*.ogv=38;5;13:*.ogx=38;5;13:*.aac=38;5;45:*.au=38;5;45:*.flac=38;5;45:*.m4a=38;5;45:*.mid=38;5;45:*.midi=38;5;45:*.mka=38;5;45:*.mp3=38;5;45:*.mpc=38;5;45:*.ogg=38;5;45:*.ra=38;5;45:*.wav=38;5;45:*.oga=38;5;45:*.opus=38;5;45:*.spx=38;5;45:*.xspf=38;5;45:", "PATH": "/home/aristoteles/.local/bin:/home/aristoteles/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin", "PWD": "/home/aristoteles", "SELINUX_LEVEL_REQUESTED": "", "SELINUX_ROLE_REQUESTED": "", "SELINUX_USE_CURRENT_RANGE": "", "SHELL": "/bin/bash", "SHLVL": "2", "SSH_CLIENT": "192.168.0.13 63892 22", "SSH_CONNECTION": "192.168.0.13 63892 192.168.0.215 22", "SSH_TTY": "/dev/pts/1", "TERM": "xterm-256color", "USER": "aristoteles", "XDG_RUNTIME_DIR": "/run/user/1000", "XDG_SESSION_ID": "18", "_": "/usr/bin/python3", "which_declare": "declare -f"}, "ansible_fibre_channel_wwn": [], "ansible_fips": false, "ansible_form_factor": "Other", "ansible_fqdn": "master.acme.es", "ansible_hostname": "master", "ansible_hostnqn": "nqn.2014-08.org.nvmexpress:uuid:ed2318bd-2982-4c03-8aef-9a97d94d574f", "ansible_interfaces": ["enp0s3", "lo"], "ansible_is_chroot": false, "ansible_iscsi_iqn": "iqn.1994-05.com.redhat:66688a17b94", "ansible_kernel": "4.18.0-365.el8.x86_64", "ansible_kernel_version": "#1 SMP Thu Feb 10 16:11:23 UTC 2022", "ansible_lo": {"active": true, "device": "lo", "features": {"esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "fcoe_mtu": "off [fixed]", "generic_receive_offload": "on", "generic_segmentation_offload": "on", "highdma": "on [fixed]", "hw_tc_offload": "off [fixed]", "l2_fwd_offload": "off [fixed]", "large_receive_offload": "off [fixed]", "loopback": "on [fixed]", "netns_local": "on [fixed]", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "rx_all": "off [fixed]", "rx_checksumming": "on [fixed]", "rx_fcs": "off [fixed]", "rx_gro_hw": "off [fixed]", "rx_gro_list": "off", "rx_udp_gro_forwarding": "off", "rx_udp_tunnel_port_offload": "off [fixed]", "rx_vlan_filter": "off [fixed]", "rx_vlan_offload": "off [fixed]", "rx_vlan_stag_filter": "off [fixed]", "rx_vlan_stag_hw_parse": "off [fixed]", "scatter_gather": "on", "tcp_segmentation_offload": "on", "tls_hw_record": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_ip_generic": "on [fixed]", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_sctp": "on [fixed]", "tx_checksumming": "on", "tx_esp_segmentation": "off [fixed]", "tx_fcoe_segmentation": "off [fixed]", "tx_gre_csum_segmentation": "off [fixed]", "tx_gre_segmentation": "off [fixed]", "tx_gso_list": "on", "tx_gso_partial": "off [fixed]", "tx_gso_robust": "off [fixed]", "tx_ipxip4_segmentation": "off [fixed]", "tx_ipxip6_segmentation": "off [fixed]", "tx_lockless": "on [fixed]", "tx_nocache_copy": "off [fixed]", "tx_scatter_gather": "on [fixed]", "tx_scatter_gather_fraglist": "on [fixed]", "tx_sctp_segmentation": "on", "tx_tcp6_segmentation": "on", "tx_tcp_ecn_segmentation": "on", "tx_tcp_mangleid_segmentation": "on", "tx_tcp_segmentation": "on", "tx_tunnel_remcsum_segmentation": "off [fixed]", "tx_udp_segmentation": "on", "tx_udp_tnl_csum_segmentation": "off [fixed]", "tx_udp_tnl_segmentation": "off [fixed]", "tx_vlan_offload": "off [fixed]", "tx_vlan_stag_hw_insert": "off [fixed]", "vlan_challenged": "on [fixed]"}, "hw_timestamp_filters": [], "ipv4": {"address": "127.0.0.1", "broadcast": "", "netmask": "255.0.0.0", "network": "127.0.0.0"}, "ipv6": [{"address": "::1", "prefix": "128", "scope": "host"}], "mtu": 65536, "promisc": false, "timestamping": [], "type": "loopback"}, "ansible_local": {}, "ansible_lsb": {}, "ansible_machine": "x86_64", "ansible_machine_id": "3b921e93a8b74d18846c738d8ddd0b1f", "ansible_memfree_mb": 1272, "ansible_memory_mb": {"nocache": {"free": 1577, "used": 235}, "real": {"free": 1272, "total": 1812, "used": 540}, "swap": {"cached": 0, "free": 1639, "total": 1639, "used": 0}}, "ansible_memtotal_mb": 1812, "ansible_mounts": [{"block_available": 2931009, "block_size": 4096, "block_total": 3508736, "block_used": 577727, "device": "/dev/mapper/cs-root", "fstype": "xfs", "inode_available": 6973977, "inode_total": 7022592, "inode_used": 48615, "mount": "/", "options": "rw,seclabel,relatime,attr2,inode64,logbufs=8,logbsize=32k,noquota", "size_available": 12005412864, "size_total": 14371782656, "uuid": "32525ff3-0089-43d4-8935-7c0a9c1c573a"}, {"block_available": 205124, "block_size": 4096, "block_total": 259584, "block_used": 54460, "device": "/dev/sda1", "fstype": "xfs", "inode_available": 523978, "inode_total": 524288, "inode_used": 310, "mount": "/boot", "options": "rw,seclabel,relatime,attr2,inode64,logbufs=8,logbsize=32k,noquota", "size_available": 840187904, "size_total": 1063256064, "uuid": "1a7144fb-e7de-46b0-8eeb-0b8275729669"}], "ansible_nodename": "master.acme.es", "ansible_os_family": "RedHat", "ansible_pkg_mgr": "dnf", "ansible_proc_cmdline": {"BOOT_IMAGE": "(hd0,msdos1)/vmlinuz-4.18.0-365.el8.x86_64", "crashkernel": "auto", "quiet": true, "rd.lvm.lv": ["cs/root", "cs/swap"], "resume": "/dev/mapper/cs-swap", "rhgb": true, "ro": true, "root": "/dev/mapper/cs-root"}, "ansible_processor": ["0", "GenuineIntel", "11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz", "1", "GenuineIntel", "11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz"], "ansible_processor_cores": 2, "ansible_processor_count": 1, "ansible_processor_nproc": 2, "ansible_processor_threads_per_core": 1, "ansible_processor_vcpus": 2, "ansible_product_name": "VirtualBox", "ansible_product_serial": "NA", "ansible_product_uuid": "NA", "ansible_product_version": "1.2", "ansible_python": {"executable": "/usr/bin/python3", "has_sslcontext": true, "type": "cpython", "version": {"major": 3, "micro": 8, "minor": 6, "releaselevel": "final", "serial": 0}, "version_info": [3, 6, 8, "final", 0]}, "ansible_python_version": "3.6.8", "ansible_real_group_id": 1000, "ansible_real_user_id": 1000, "ansible_selinux": {"config_mode": "enforcing", "mode": "enforcing", "policyvers": 33, "status": "enabled", "type": "targeted"}, "ansible_selinux_python_present": true, "ansible_service_mgr": "systemd", "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBHkhIuXPm9AB+yDnnOkg9mjedQN3XaBisxpBWeIHRCFCvkDMkzSd2UHtARa4PNFVd5N+eQpGkG4myccpr7FWkDI=", "ansible_ssh_host_key_ecdsa_public_keytype": "ecdsa-sha2-nistp256", "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAIG+xcc64FrhB3QU4wRnRodHGbmR9ZbGEOBqsmFkWYkBs", "ansible_ssh_host_key_ed25519_public_keytype": "ssh-ed25519", "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABgQDTgvcfyqx+xZ8mZ0wB5JgawnIhzO6AqI7+jgkXN5YV2wsEe99puJjNjMoarESrdiVkSPeu9VsvYCNt+nQIyLGoVUJ4ZjdMZU+t1j4bsLEMVLMMUnjR6W3b4kR1QCARAfhqTwHrgA+RHy4lODD4FRy0ygrHFxQgEzFDJIsL+I7R71C5Nt2EY1T1FbBV5K5LP4gXYCZF69si+eDJALSu5PqKFCniLkHfMnbQxYFiN64RXJv1zv7uAGvQse7nLBsHixHLzs4DFjr8bqOMtwf7HJP4ciyWT3XXAULa1j71R+GR9uPb2b6bZzqvxleP/e/zP3kDygr0Pfla+JrRQ6LhBsf3+BXV0bI/5wNy4E2/2QrbjCju1rDLYmNrHu2RkXrVGgBv50NLPJeLmfdeLSFniQXBNWRxNzHbzDYIRkyGWvLh+u+YMIaPXQPkWm5lagZH4cjT/j5/eSZdB5xC1F8AUzTeqSwEpD5riOqO52wUgycUIETe30+gn83APMvlTG6oSiM=", "ansible_ssh_host_key_rsa_public_keytype": "ssh-rsa", "ansible_swapfree_mb": 1639, "ansible_swaptotal_mb": 1639, "ansible_system": "Linux", "ansible_system_capabilities": [""], "ansible_system_capabilities_enforced": "True", "ansible_system_vendor": "innotek GmbH", "ansible_uptime_seconds": 17951, "ansible_user_dir": "/home/aristoteles", "ansible_user_gecos": "", "ansible_user_gid": 1000, "ansible_user_id": "aristoteles", "ansible_user_shell": "/bin/bash", "ansible_user_uid": 1000, "ansible_userspace_architecture": "x86_64", "ansible_userspace_bits": "64", "ansible_virtualization_role": "guest", "ansible_virtualization_tech_guest": ["virtualbox"], "ansible_virtualization_tech_host": [], "ansible_virtualization_type": "virtualbox", "gather_subset": ["all"], "module_setup": true}, "changed": false}