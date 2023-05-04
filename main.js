    //=================================
    //#     Author: MI SHAJIB
    //=================================

    // Sample packet in hex format
    const packet = "450000280000400080060000c0a80101c0a80164";

    // Convert packet to binary format
    const packetBinary = Buffer.from(packet, "hex");

    console.log("packetBinary -> ", packetBinary[0]);

    // Parse header fields
    const version = packetBinary[0] >> 4;
    const headerLength = (packetBinary[0] & 0x0f) * 4;
    const totalLength = packetBinary.readUInt16BE(2);
    const protocol = packetBinary[9];
    const sourceIP = packetBinary.slice(12, 16).join(".");
    const destinationIP = packetBinary.slice(16, 20).join(".");

    console.log("Version:", version);
    console.log("Header length:", headerLength);
    console.log("Total length:", totalLength);
    console.log("Protocol:", protocol);
    console.log("Source IP:", sourceIP);
    console.log("Destination IP:", destinationIP);

    // Parse data
    const dataOffset = headerLength;
    const data = packetBinary.slice(dataOffset, totalLength);

    console.log("Data:", data.toString());
