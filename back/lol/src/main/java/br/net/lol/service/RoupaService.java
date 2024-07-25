package com.empresa.lavanderia.service;

import com.empresa.lavanderia.dto.RoupaDTO;
import com.empresa.lavanderia.model.Roupa;
import com.empresa.lavanderia.repository.RoupaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoupaService {

    @Autowired
    private RoupaRepository roupaRepository;

    public List<RoupaDTO> getAllRoupas() {
        return roupaRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public RoupaDTO saveRoupa(RoupaDTO roupaDTO) {
        Roupa roupa = convertToEntity(roupaDTO);
        roupa = roupaRepository.save(roupa);
        return convertToDTO(roupa);
    }

    private RoupaDTO convertToDTO(Roupa roupa) {
        RoupaDTO dto = new RoupaDTO();
        dto.setId(roupa.getId());
        dto.setNome(roupa.getNome());
        dto.setPreco(roupa.getPreco());
        dto.setPrazo(roupa.getPrazo());
        return dto;
    }

    private Roupa convertToEntity(RoupaDTO dto) {
        Roupa roupa = new Roupa();
        roupa.setId(dto.getId());
        roupa.setNome(dto.getNome());
        roupa.setPreco(dto.getPreco());
        roupa.setPrazo(dto.getPrazo());
        return roupa;
    }
}
