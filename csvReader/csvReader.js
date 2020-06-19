function button() {
    let tableHeaders = document.getElementById("tableHeaders").value
    let productText = document.getElementById("productText").value

    const productDataArray = [tableHeaders.split('	'), productText.split('	')]
    console.log(productDataArray)
    document.getElementById("result").innerHTML = productDataArray
}