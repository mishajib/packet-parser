#=================================
#     Author: MI SHAJIB
#=================================

import struct

# Sample packet in hex format
packet = b'450000280000400080060000c0a80101c0a80164'

# Convert packet to binary format
packetBinary = bytes.fromhex(packet.decode('utf-8'))

# Parse header fields
version = packetBinary[0] >> 4
headerLength = (packetBinary[0] & 0x0f) * 4
totalLength = struct.unpack('!H', packetBinary[2:4])[0]
protocol = packetBinary[9]
sourceIP = '.'.join(str(x) for x in packetBinary[12:16])
destinationIP = '.'.join(str(x) for x in packetBinary[16:20])

print('Version:', version)
print('Header length:', headerLength)
print('Total length:', totalLength)
print('Protocol:', protocol)
print('Source IP:', sourceIP)
print('Destination IP:', destinationIP)

# Parse data
dataOffset = headerLength
data = packetBinary[dataOffset:totalLength]

print('Data:', data.decode('utf-8'))