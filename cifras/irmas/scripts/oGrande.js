 $(document).ready(() => {

    $('.do').click(() => {
        
        $('.mod-2-tom').html('Ab')
        $('.mod-1-tom').html('Bb')
        $('.inv-1').html('F/A')
        $('.pass-rel-quarta').html('F/E')
        
    })

    $('.dosus').click(() => {
       
       $('.mod-2-tom').html('A')
       $('.mod-1-tom').html('B')
       $('.inv-1').html('F#/A#')
       $('.pass-rel-quarta').html('F#/F')
        
    })

    $('.re').click(() => {
        
       $('.mod-2-tom').html('Bb')
       $('.mod-1-tom').html('C')
       $('.inv-1').html('G/B')
       $('.pass-rel-quarta').html('G/F#')
        
    })

    $('.mib').click(() => {
        
        $('.mod-2-tom').html('B')
        $('.mod-1-tom').html('C#')
        $('.inv-1').html('Ab/C')
        $('.pass-rel-quarta').html('Ab/G')
        
    })

    $('.mi').click(() => {
       
        $('.mod-2-tom').html('C')
        $('.mod-1-tom').html('D')
        $('.inv-1').html('A/C#')
        $('.pass-rel-quarta').html('A/Ab')

    })

    $('.fa').click(() => {
        
        $('.mod-2-tom').html('C#')
        $('.mod-1-tom').html('Eb')
        $('.inv-1').html('Bb/D')
        $('.pass-rel-quarta').html('Bb/A')
        
    })

    $('.fasus').click(() => {
       
        $('.mod-2-tom').html('D')
        $('.mod-1-tom').html('E')
        $('.inv-1').html('B/D#')
        $('.pass-rel-quarta').html('B/A#')
       
    })

    $('.sol').click(() => {
        
        $('.mod-2-tom').html('Eb')
        $('.mod-1-tom').html('F')
        $('.inv-1').html('C/E')
        $('.pass-rel-quarta').html('C/B')

    })

    $('.solsus').click(() => {
        
        $('.mod-2-tom').html('E')
        $('.mod-1-tom').html('F#')
        $('.inv-1').html('C#/F')
        $('.pass-rel-quarta').html('C#/C')
    })

    $('.la').click(() => {
        
        $('.mod-2-tom').html('F')
        $('.mod-1-tom').html('G')
        $('.inv-1').html('D/F#')
        $('.pass-rel-quarta').html('D/C#')
        
    })

    $('.sib').click(() => {
        
        $('.mod-2-tom').html('F#')
        $('.mod-1-tom').html('Ab')
        $('.inv-1').html('Eb/G')
        $('.pass-rel-quarta').html('Eb/D')
        
    })

    $('.si').click(() => {
        
       $('.mod-2-tom').html('G')
       $('.mod-1-tom').html('A')
       $('.inv-1').html('E/Ab')
       $('.pass-rel-quarta').html('E/Eb')
        
    })


})