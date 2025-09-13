import os from "os";

const input = process.argv[2];

if (input === "check-memory") {
    const mb = os.freemem() / 1024 / 1024;
    const gb = os.freemem() / 1024 / 1024 /1024;
    console.log(`Mb: ${Math.floor(mb)}`);
    console.log(`Gb: ${Math.floor(gb)}`);
}else{
    console.log("No command provided");
}