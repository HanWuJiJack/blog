// 导出页面为PDF格式
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
class PdfLoader {
    constructor(ele, pdfFileName,
        pdf = {
            top: 20,
            bottom: 0,
            left: 30,
            right: 30
        },
        head = {
            top: 20,
            bottom: 10
        },
        foot = {
            top: 20,
            bottom: 20
        }
    ) {
        this.pdf = pdf
        this.domEachEndSum = 1 //加尾页页码
        this.head = head
        this.foot = foot
        this.ele = ele;
        this.pdfFileName = pdfFileName;
        this.A4_WIDTH = 595;
        this.A4_HEIGHT = 842;
        this.pageHeight = 0
        this.pageNum = 1
        this.init = 0 //加首页页眉
    };
    async getPDF(resolve) {
        let ele = this.ele;
        let pdfFileName = this.pdfFileName
        let eleW = ele.offsetWidth // 获得该容器的宽
        let eleH = ele.scrollHeight // 获得该容器的高
        let eleOffsetTop = ele.offsetTop // 获得该容器到文档顶部的距离
        let eleOffsetLeft = ele.offsetLeft // 获得该容器到文档最左的距离
        let canvas = document.createElement("canvas")
        let abs = 0
        let win_in = document.documentElement.clientWidth || document.body.clientWidth // 获得当前可视窗口的宽度（不包含滚动条）
        let win_out = window.innerWidth // 获得当前窗口的宽度（包含滚动条）
        if (win_out > win_in) {
            abs = (win_out - win_in) / 2 // 获得滚动条宽度的一半
        }
        canvas.width = eleW * 2 // 将画布宽&&高放大两倍
        canvas.height = eleH * 2
        let context = canvas.getContext("2d")
        context.scale(2, 2) // 增强图片清晰度
        context.translate(-eleOffsetLeft - abs, -eleOffsetTop)
        html2canvas(ele, {
            useCORS: true // 允许canvas画布内可以跨域请求外部链接图片, 允许跨域请求。
        }).then(async canvas => {
            let contentWidth = canvas.width
            let contentHeight = canvas.height
            // 一页pdf显示html页面生成的canvas高度;
            this.pageHeight = (contentWidth / this.A4_WIDTH) * this.A4_HEIGHT
            // 这样写的目的在于保持宽高比例一致 this.pageHeight/canvas.width = a4纸高度/a4纸宽度// 宽度和canvas.width保持一致
            // 未生成pdf的html页面高度
            let leftHeight = contentHeight
            // 页面偏移
            let position = 0
            // a4纸的尺寸[595,842],单位像素，html页面生成的canvas在pdf中图片的宽高
            let imgWidth = this.A4_WIDTH - 10 // -10为了页面有右边距
            let imgHeight = (this.A4_WIDTH / contentWidth) * contentHeight
            let pageData = canvas.toDataURL("image/jpeg", 1.0)
            let pdf = jsPDF("", "pt", "a4");
            // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            // 当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < this.pageHeight) { // 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
                pdf.addImage(pageData, "JPEG", 5, 0, imgWidth, imgHeight)
                // pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
            } else { // 分页
                while (leftHeight > 0) {
                    pdf.addImage(pageData, "JPEG", 5, position, imgWidth, imgHeight)
                    leftHeight -= this.pageHeight
                    position -= this.A4_HEIGHT
                    // 避免添加空白页
                    if (leftHeight > 0) {
                        pdf.addPage()
                    }
                }
            }
            pdf.save(pdfFileName + ".pdf", {
                returnPromise: true
            }).then(() => { // 去除添加的空div 防止页面混乱
                let empty = document.querySelectorAll('.pdf-empty')
                for (let i = 0; i < empty.length; i++) {
                    empty[i].remove();
                }
                let foot = document.querySelectorAll('.pdf-foot')
                for (let i = 0; i < foot.length; i++) {
                    foot[i].remove();
                }
                let head = document.querySelectorAll('.pdf-head')
                for (let i = 0; i < head.length; i++) {
                    head[i].remove();
                }
                this.ele.style.height = '';
                this.ele.style.padding = '';
                resolve();
            });
        })

    };
    // 输出pdf
    async outPutPdfFn(pdfFileName) {
        return new Promise((resolve, reject) => { // 进行分割操作，当dom内容已超出a4的高度，则将该dom前插入一个空dom，把他挤下去，分割
            let eleBounding = this.ele.getBoundingClientRect();
            this.pageHeight = eleBounding.width / this.A4_WIDTH * this.A4_HEIGHT;
            this.ele.style.height = 'initial';
            // padding: 20px 30px 40px 50px;     代表： 上  -   右  -  下  -   左
            this.ele.style.padding = `${this.pdf.top}px ${this.pdf.right}px ${this.pdf.bottom}px ${this.pdf.left}px`;
            pdfFileName ? this.pdfFileName = pdfFileName : null;
            this.pageNum = 1; // pdf页数
            this.domEach(this.ele)
            this.domEachEnd(this.ele)
            // 异步函数，导出成功后处理交互
            this.getPDF(resolve, reject);
        })
    };
    // 添加 页眉 页码
    domEach(dom) {
        let childNodes = dom.childNodes
        childNodes.forEach((childDom, index) => {
            let divParent = childDom.parentNode; // 获取该div的父节点
            if (this.init == 0) {
                if (this.head.top - this.pdf.top < 0) {
                    throw new Error("head顶部距离请大于pdf顶部距离")
                }
                // this.addHeaderDiv(childDom, divParent, 20)
                this.addHeaderDiv(childDom, divParent, this.head.top - this.pdf.top)
                this.init++
                this.domEach(dom)
                return
            }
            if (childDom.getBoundingClientRect) {
                let eleBounding = this.ele.getBoundingClientRect();
                const now = childDom.getBoundingClientRect();
                if (this.hasClass(childDom, "line") || !childDom.childNodes || childDom.childNodes.length === 0) {
                    if (now.height + 40 + this.head.top + this.head.bottom + this.foot.top + this.foot.bottom + -this.pageHeight > 0) {
                        throw new Error("单行不允许超过A4纸高度！")
                    }
                }
                // console.log("=>now:", now)
                const PageButtom = now.bottom - eleBounding.top
                const PageTop = now.top - eleBounding.top
                if (PageButtom - this.pageNum * parseInt(this.pageHeight) + (this.foot.top + this.foot.bottom + 20 + 30) >= 0) {
                    // console.log("=>", now, this.pageHeight, this.pageNum)
                    const differTop = this.pageNum * parseInt(this.pageHeight) - PageTop // 计算获取当前节点到页底的距离
                    const differButtom = this.pageNum * parseInt(this.pageHeight) - PageButtom // 计算获取当前节点到页底的距离
                    if (differButtom >= (this.foot.top + this.foot.bottom + 20)) {
                        let divParent = childDom.parentNode; // 获取该div的父节点
                        const newNode = this.addEmptyDiv(childDom.nextSibling, differButtom - (this.foot.top + this.foot.bottom + 20), divParent)
                        const pageFooter = this.addFootDiv(newNode.nextSibling, divParent)
                        this.addHeaderDiv(pageFooter.nextSibling, divParent)
                        this.pageNum++
                        this.domEach(dom)
                        return
                    } else {
                        if (this.hasClass(childDom, "line") || !childDom.childNodes || childDom.childNodes.length === 0) {
                            let divParent = childDom.parentNode; // 获取该div的父节点
                            const newNode = this.addEmptyDiv(childDom, differTop - (this.foot.top + this.foot.bottom + 20), divParent)
                            const pageFooter = this.addFootDiv(childDom, divParent)
                            this.addHeaderDiv(childDom, divParent)
                            this.pageNum++
                            this.domEach(dom)
                            return
                        }
                    }

                }
            }
            if (childDom.childNodes.length) {
                this.domEach(childDom)
            }
        })
    }
    // 添加尾页
    domEachEnd() {
        let divParent = this.ele // 获取该div的父节点
        let childNodes = this.ele.childNodes
        const childDom = childNodes[childNodes.length - this.domEachEndSum]
        if (childDom.getBoundingClientRect) {
            if (this.foot.bottom - this.pdf.bottom < 0) {
                throw new Error("foot底部距离请大于pdf底部距离")
            }
            const now = childDom.getBoundingClientRect();
            let eleBounding = this.ele.getBoundingClientRect();
            const PageButtom = now.bottom - eleBounding.top
            const differButtom = this.pageNum * parseInt(this.pageHeight) - PageButtom // 计算获取当前节点到页底的距离
            const newNode = this.addEmptyDiv(this.ele.nextSibling, differButtom - (this.foot.top + this.foot.bottom - this.pdf.bottom + 20), divParent)
            this.addFootDiv(newNode.nextSibling, divParent, null, this.foot.bottom - this.pdf.bottom)
        } else {
            this.domEachEndSum++
            this.domEachEnd()
        }
    }
    addEmptyDiv(node, height, divParent) {
        let newNode = document.createElement('div');
        newNode.className = 'pdf-empty';
        newNode.style.background = 'white';
        newNode.style.height = height + 'px';
        newNode.style.width = '100%';
        divParent.insertBefore(newNode, node);
        return newNode
    }
    addFootDiv(node, divParent, top, bottom) {
        let paddingTop = top
        if (paddingTop != 0 && !paddingTop) {
            paddingTop = this.foot.top
        }
        let paddingBottom = bottom
        if (paddingBottom != 0 && !paddingBottom) {
            paddingBottom = this.foot.bottom
        }
        let pageFooter = document.createElement("div")
        pageFooter.className = "pdf-foot"
        pageFooter.innerHTML = "第" + this.pageNum + " 页"
        pageFooter.style.paddingTop = paddingTop + "px"
        pageFooter.style.fontSize = 14 + "px"
        pageFooter.style.textAlign = "center"
        pageFooter.style.lineHeight = 20 + "px"
        pageFooter.style.paddingBottom = paddingBottom + "px"
        divParent.insertBefore(pageFooter, node);
        return pageFooter
    }
    addHeaderDiv(node, divParent, top, bottom) {
        let paddingTop = top
        if (paddingTop != 0 && !paddingTop) {
            paddingTop = this.head.top
        }
        let paddingBottom = bottom
        if (paddingBottom != 0 && !paddingBottom) {
            paddingBottom = this.head.bottom
        }
        let pageHeader = document.createElement("div")
        pageHeader.className = "pdf-head"
        pageHeader.innerHTML = "hsueh" + ` - ${new Date().getFullYear()}年${new Date().getMonth() + 1}月`
        pageHeader.style.paddingTop = paddingTop + "px"

        pageHeader.style.lineHeight = 19 + "px"
        pageHeader.style.borderBottom = "1px solid #ccc"
        pageHeader.style.fontSize = 14 + "px"
        pageHeader.style.paddingBottom = paddingBottom + "px"
        divParent.insertBefore(pageHeader, node);
        return pageHeader
    }
    hasClass(element, cls) {
        if ((`` + element.className + ``).indexOf(`` + cls + ``) > -1) {
            // console.log("element.className", element.className)
            return true
        } else {
            return false
        }

    }
}

export default function (htmlTitle, ref) {
    let pdf = new PdfLoader(ref, htmlTitle);
    pdf.outPutPdfFn(htmlTitle);
}


// class:line代表一行