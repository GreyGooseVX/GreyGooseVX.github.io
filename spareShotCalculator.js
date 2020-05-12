const spareShotProbability = prompt("spare shot probability?", 0.2)
const magazineSize = 10
const testRuns = 10000000
const effectiveMagazineSize = calculateEffectiveMagazineSize(spareShotProbability, magazineSize, testRuns)
console.log(effectiveMagazineSize)

function calculateEffectiveMagazineSize(spareShotProbability, magazineSize, testRuns) {
    let totalShotsFired = 0
    for (let i = 1; i <= testRuns; i++) {
        for (let j = 1; j <= magazineSize;) {
            totalShotsFired++
            let spareShotRNG = Math.random()
            if (spareShotRNG > spareShotProbability) j++
        }
    }
    return totalShotsFired / testRuns
}