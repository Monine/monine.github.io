---
title: 理解 HTTPS 协议
---

HTTPS 协议主要解决 HTTP 协议 “明文传输” 导致的信息安全问题。

## 对称加密

C 和 S 确定一个密钥，将信息通过密钥加密后传输。  
但存在一个问题，密钥也需要通过网络进行传输，同样会被窃取。

## 非对称加密

C 和 S 各自生成一对公钥和私钥，通过自己的公钥加密的信息后只能被自己的私钥解密，相反，通过自己的私钥加密的信息只能被自己的公钥解密。  
公钥对外公开，私钥自己保留。

C 给 S 发送信息，用 S 的公钥对信息进行加密，S 收到信息用自己的私钥进行解密。
S 给 C 发送信息，用 C 的公钥对信息进行加密，C 收到信息用自己的私钥进行解密。

非对称加密存在的问题是：慢！  
加密、解密的过程都相对（对称加密）慢很多。

另外：非对称加密的内容长度不能比公钥长。

## 非对称加密 + 对称加密

只慢一次，通过非对称加密的方式加密对称加密的密钥，后续信息都通过对称加密的密钥加密传输。

C 给 S 发信息，先生成一个对称加密的密钥，然后使用 S 的公钥加密密钥，S 收到信息通过自己的私钥进行解密，拿到密钥。  
S 给 C 发信息，使用 C 的密钥对信息内容进行加密，C 收到信息用密钥解密即可。

## 中间人攻击

M 对 C 伪装层 S，对 S 伪装成 C。  
C 和 S 互相发送公钥的过程中，途径 M，双方公钥均被被 M 窃取，M 将自己的公钥分别发送给 C 和 S。导致 C 误以为 M 是 S，S 误以为 M 是 C。

C 给 S 发送信息，用的是 M 的公钥对信息进行加密，途径 M，M 可用自己的私钥进行解密。再用 S 的公钥对解密信息进行加密，发送给 S，S 收到信息用自己的私钥进行解密。  
S 给 C 回送信息，用的也是 M 的公钥对信息进行加密，途径 M，M 可用自己的私钥进行解密。再用 C 的公钥对解密信息进行加密，发送给 C，C 收到信息用自己的私钥进行解密。

## CA

CA 是一个具有公信力的认证中心，浏览器和系统都会有一些内置的 CA 证书。

S 将自己的基本信息（公钥 + 个人信息 + 其它信息）通过 hash 算法生成信息摘要，给到 CA，CA 用自己的私钥对信息摘要进行加密，生成数字签名。  
CA 使用 S 的数字签名 + S 的基本信息组成数字证书，颁发给 S 作为凭证。

C 请求与 S 建立连接，S 收到消息后将自己的数字证书发送给 C。C 使用同样的 hash 算法对数字证书中的基本信息进行 hash 得到信息摘要。使用 CA 的公钥对证书中的数字签名进行解密，获得信息摘要，对比两份信息摘要。如果相同，则可信任，后续发送的信息内容通过数字证书基本信息中的公钥进行加密后传输。如果不相同，则表示数字证书不是 S 发送过来的，不能被信任。

M 为什么不能伪造数字证书？  
没有 CA 的私钥，就算通过 CA 同样的方式伪造数字证书，C 使用 CA 的公钥是无法正确解密的。
