const release = process.env.NODE_ENV !== "production";

module.exports = {
    assetPrefix: release ? '/binaryegg.github.io/' : ''
}
