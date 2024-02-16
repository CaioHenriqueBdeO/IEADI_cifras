 $(document).ready(() => {

    $('.do').click(() => {
        $('.pass-rel-tonica').html('C/B')
        $('.inv-1').html('G/B')
        $('.pass-rel-quarta').html('F/E')
    })

    $('.dosus').click(() => {
        $('.pass-rel-tonica').html('C#/C')
        $('.inv-1').html('G#/C')
        $('.pass-rel-quarta').html('F#/F')
    })

    $('.re').click(() => {
        $('.pass-rel-tonica').html('D/C#')
        $('.inv-1').html('A/C#')
        $('.pass-rel-quarta').html('G/F#')
    })

    $('.mib').click(() => {
        $('.pass-rel-tonica').html('Eb/D')
        $('.inv-1').html('Bb/D')
        $('.pass-rel-quarta').html('Ab/G')
    })

    $('.mi').click(() => {
        $('.pass-rel-tonica').html('E/Eb')
        $('.inv-1').html('B/Eb')
        $('.pass-rel-quarta').html('A/Ab')
    })

    $('.fa').click(() => {
        $('.pass-rel-tonica').html('F/E')
        $('.inv-1').html('C/E')
        $('.pass-rel-quarta').html('Bb/A')
    })

    $('.fasus').click(() => {
        $('.pass-rel-tonica').html('F#/F')
        $('.inv-1').html('C#/F')
        $('.pass-rel-quarta').html('B/Bb')
    })

    $('.sol').click(() => {
        $('.pass-rel-tonica').html('G/F#')
        $('.inv-1').html('D/F#')
        $('.pass-rel-quarta').html('C/B')
    })

    $('.solsus').click(() => {
        $('.pass-rel-tonica').html('G#/G')
        $('.inv-1').html('D#/G')
        $('.pass-rel-quarta').html('C#/C')
    })

    $('.la').click(() => {
        $('.pass-rel-tonica').html('A/G#')
        $('.inv-1').html('E/G#')
        $('.pass-rel-quarta').html('D/C#')
    })

    $('.sib').click(() => {
        $('.pass-rel-tonica').html('Bb/A')
        $('.inv-1').html('F/A')
        $('.pass-rel-quarta').html('Eb/D')
    })

    $('.si').click(() => {
        $('.pass-rel-tonica').html('B/A#')
        $('.inv-1').html('F#/Bb')
        $('.pass-rel-quarta').html('E/Eb')
    })


})