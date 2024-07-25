import com.empresa.lavanderia.dto.RoupaDTO;
import com.empresa.lavanderia.service.RoupaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roupas")
public class RoupaController {

    @Autowired
    private RoupaService roupaService;

    @GetMapping
    public List<RoupaDTO> getAllRoupas() {
        return roupaService.getAllRoupas();
    }

    @PostMapping
    public ResponseEntity<RoupaDTO> saveRoupa(@RequestBody RoupaDTO roupaDTO) {
        RoupaDTO savedRoupa = roupaService.saveRoupa(roupaDTO);
        return ResponseEntity.ok(savedRoupa);
    }
}
